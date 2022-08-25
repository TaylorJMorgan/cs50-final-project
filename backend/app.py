import os
import re
from unicodedata import name

from flask import Flask, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from flask_sqlalchemy import SQLAlchemy
from helpers import login_required, apology
from flask_json import FlaskJSON, JsonError, json_response, as_json

# Basic app config
app = Flask(__name__)
json = FlaskJSON(app)

# SQLAlchemy config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Session config
SESSION_TYPE = 'filesystem'
app.config.from_object(__name__)
app.config['SESSION_COOKIE_SAMESITE'] = 'None'
app.config['SESSION_COOKIE_SECURE'] = True
Session(app)

# Database models

# User model


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    # Make data JSON serializable
    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

# Product model


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(240), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(120), nullable=False)

    # Make data JSON serializable
    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


@app.route('/login', methods=['POST'])
def login():
    ''' Login existing user '''

    user_data = request.get_json()

    # End the current user's session
    session.clear()

    # Email can't be blank
    if not user_data['email']:
        return 'Please enter an email address', 400

    # Password can't be blank
    elif not user_data['password']:
        print('Fuck, no pass')
        return 'Please enter a password', 400

    # Query database for email
    user = User.query.filter_by(email=user_data['email']).first()
    if not user:
        return 'No account associated with this email', 400

    # If valid user, make user data usable
    else:
        user = user.as_dict()

    # Username and password have to be correct
    if not user['email'] or not check_password_hash(user['password'], user_data['password']):
        return 'Invalid username or password', 400

    # Create session for logged in user
    session['user_email'] = user['email']
    return 'Success', 200


# Route to get info from session
@app.route('/get')
def get():
    if session.get('user_email'):
        return session.get('user_email')
    else:
        return 'Not signed in', 200


@app.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return 'Success', 200


@app.route('/products')
def products():
    ''' Display products to user '''
    productList = []

    products = Product.query.all()

    for product in products:
        productList.append(product.as_dict())

    return productList


@app.route('/register', methods=['POST'])
def register():
    ''' Register new user '''

    # Get POSTed user data
    user_data = request.get_json()

    # Regular expression for email address - reference: https://stackabuse.com/python-validate-email-address-with-regular-expressions-regex/
    regex = re.compile(
        r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')

    # Email can't be blank
    if not user_data['email']:
        return 'Please enter an email address', 400

    # Email has to be unique
    elif (User.query.filter_by(email=user_data['email']).first()):
        return 'Email already in use', 400

    # Email has to be a valid email format
    elif not re.fullmatch(regex, user_data['email']):
        return 'Please enter a valid email address', 400

        # Password can't be blank
    elif not user_data['password']:
        return 'Please enter a password', 400

    # Password confirmation can't be blank
    elif not user_data['passwordConfirm']:
        return 'Please confirm your password', 400

    # Password has to match confirmation
    elif user_data['password'] != user_data['passwordConfirm']:
        return 'Passwords do not match', 400

    # Hash the password
    hash_pass = generate_password_hash(
        user_data['password'], method='pbkdf2:sha256', salt_length=8)

    # Create new user and add to database
    new_user = User(email=user_data['email'], password=hash_pass)
    db.session.add(new_user)
    db.session.commit()
    new_user = new_user.as_dict()
    session['user_email'] = new_user['email']
    return 'Success', 200
