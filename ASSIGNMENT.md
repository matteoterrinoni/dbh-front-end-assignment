## DBH Front-End assignment

You may complete this assignment and then send us your work as an attachment (remember to include the `.git` folder) or
published in a _private_ repository.

Thanks!

## Table of Contents

* [Description](#description)
* [REST API](#rest-api)
* [Pages](#pages)

## Description

Create a `Node.js`, `React`, universal webapp based on
[react-boilerplate SSR](https://github.com/tomazy/react-boilerplate), branch **ssr**, with two
pages: [/user-profile/{id}](#user-profile) and [/](#/).

* Real styling is not necessary, use _super quick_ styles as long as you use
  `styled-components` and CSS3.
* Use `redux-saga` for API calls.
* Validate the `props` passed to every `React` component.
* The code has to be cleanly formatted and with comments when necessary.

## REST API

Please create the following simple mock, async REST APIs:

#### Users

##### Method: GET

**URL:** /users/{id}

This service returns a user profile that has the following properties:

```json
{
  "id": "Number:required",
  "username": "String:required",
  "email": "String:required",
  "numberOfBookings": "Number",
  "isPremiumUser": "Boolean",
  "premiumCode": "String"
}
```

Please hardcode a few mock users.

##### Method: POST

This service "updates" (mocks the update of) existing mock users, it does not
create new users.

**URL:** /users

This service accepts a JSON POST like the following:

```json
{
  "id": "Number:required",
  "username": "String:required:minimum-3-characters",
  "email": "String:required:basic-email-validation",
  "numberOfBookings": "Number",
  "isPremiumUser": "Boolean",
  "premiumCode": "String"
}
```

If one/more than one field is required and was sent empty or in an incorrect
format, or if the user id does not exist, the server returns the following:

```json
{
  "success": false,
  "message": "String:required",
  "errors": {
    "id": "String",
    "username": "String",
    "email": "String",
    "numberOfBookings": "String",
    "isPremiumUser": "Boolean",
    "premiumCode": "String"
  }
}
```

If everything is ok, the server returns the following:

```json
{
  "success": true,
  "message": "String:required"
}
```

## Pages

### /user-profile/{id} page

This page calls the /users API to fetch the profile of the user with id {id}.

**If the id does not exist:** the page shows the error message.

**If the id exists:** it displays the values in a form, that lets the user
modify every field excluding the hidden _id_ field.

The form is has a standard submit button, shows server side validation errors
returned from the API and shows clearly when the submission is successful or
not.

**Nice to have:** the _premiumCode_ field in the form should be disabled when
_isPremiumUser_ is _false_.

### /

This is just a placeholder page with the text _Homepage_ as _h1_ and a link to
the /user-profile page with a valid ID.


