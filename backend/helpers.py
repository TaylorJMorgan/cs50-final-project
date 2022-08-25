from http.client import REQUESTED_RANGE_NOT_SATISFIABLE
import os
import requests
import urllib.parse

from flask import redirect, request, session
from functools import wraps


def login_required(f):
    ''' Decorator for pages that require login '''
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get('user_id') is None:
            return redirect('/login')
        return f(*args, **kwargs)
    return decorated_function


def apology(apology):
    return "TODO"
