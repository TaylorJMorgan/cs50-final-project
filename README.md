# SITTR
## Video Demo: [Here](https://youtu.be/L8nH3I7WuDc)
## URL: [sittr.shop](http://www.sittr.shop)
## Description:

Sittr is a mockup Ecommerce site, where users can browse a number of different chairs and add them to their cart - although, for obvious reasons, they cannot actually purchase them.

---

## Usage

Sittr is an Ecommerce site. There is a product page, where users can click on products for more information and a link to add the product to their cart. The site also has a user login and registration system so users can save items to their cart. Users are able to remove items from their cart as well. Since these aren't real chairs, the user is unable to actually purchase them - sorry!

---

## Backend

For the backend, Sittr utilizes Flask, as well as some popular Flask libraries such as Flask Session and Flask SQLAlchemy. As Sittr is a React app, the frontend handles routing and much of the user experience.

### Flask Session

Flask Session allows you to create and use sessions, most commonly in the form of cookies, which you can persist certain data with. This allows users to remain logged in after leaving a site, or allows for a shopping cart to persist between site visits.

### Database

Sittr uses a database for its users and products. The backend uses SQLAlchemy, a popular Python SQL ORM (Object Relational Mapper) which itself uses SQLite.

### Users

Users are entered with a unique ID (which is handled automatically), an email address, and password, which is hashed before being inserted.

### Products

Products are entered with a unique ID, name, description, price, and filename for the frontend to display for an image.

---

## Frontend

For the frontend, Sittr utilizes HTML, CSS (with Bootstrap), JavaScript, and React. Like most React apps, routing between pages is handled by the frontend rather than the backend. There are a great number of libraries used for the frontend - in particular, React Router and React Bootstrap are very popular. Sittr is entirely responsive, which means that it reformats itself to be comfortable to use on any size or shape of device - Bootstrap in particular makes this easy to implement.

### Bootstrap

Bootstrap is a colossal HTML, CSS, and JS library that makes responsive frontend design much easier. In this case, React Bootstrap was used as it follows React's design of functional components rather than simply applying class names to HTML tags.

### React Router

React Router is a library that allows React to handle all of the site routing. In a React app, it is preferred to use frontend routing over backend routing.

---

## Images

All of Sittr's images are generated with DALL-E 2, a machine learning AI image generater developed by OpenAI. None of these images are real - they were created by entering prompts into DALL-E 2. The user who generates these images has full commercial rights to them. This was an interesting and economical solution over purchasing stock images.