# WeConnect React-Redux App

[![Build Status](https://travis-ci.org/SoniaRMK/WeConnect-ReactJS.svg?branch=reset-user-password)](https://travis-ci.org/SoniaRMK/WeConnect-ReactJS)
[![Maintainability](https://api.codeclimate.com/v1/badges/b0b8e2fe387306d29bdf/maintainability)](https://codeclimate.com/github/SoniaRMK/WeConnect-ReactJS/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b0b8e2fe387306d29bdf/test_coverage)](https://codeclimate.com/github/SoniaRMK/WeConnect-ReactJS/test_coverage)
## Getting started

You can view a live demo over at https://weconnect-redux.herokuapp.com/

To get the frontend running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server (this project uses create-react-app)

### Making requests to the backend API

For convenience, we have a live API server running on Heroku for the application to make requests against. You can view [the API spec here](https://github.com/SoniaRMK/WeConnect/tree/WeConnectAPI-DB) which contains all routes & responses for the server.

 ## Functionality overview

 WeConnect provides a platform that brings businesses and individuals together.

This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with.

**General functionality:**

- Authenticate users via JWT (login/signup pages + logout button)
- CRUD Businesses
- CR** Reviews on businesses (no updating and deleting required)
- GET and display paginated lists of Businesses
- search for businesses and filter businesses per location and/or category

**The general page breakdown looks like this:**

- Sign in/Sign up pages (URL: `/`)
    - Use JWT (store the token in sessionStorage)
- Businesses page (URL: `/businesses`)
    - View paginated lists of Businesses
    - Search for businesses based on a search term
    - Filter businesses based on location and/or category
- A business page (URL `/businesses/business-id`)
    - View the details of the business
    - Add a review to the businesses
    - View all reviews for that business
- Register business page (URL `/register-business`)
    - Add a business
- A User Dashboard (URL `/user-dashboard`) 
    - View a list of all businesses created by you as the logged in user
    - Delete business button
    - Edit business button
    - Reset Password button
