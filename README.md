# Fluffnet frontend

## Intro

Frontend for a web app that can predict whether an image has something fluffy in it. Go...

- [here](https://github.com/mihailthebuilder/fluffnet) for info and source code on the Flask backend that stores the predictive model
- [here](https://mihailthebuilder.github.io/fluffnet-front) for the live site

## Table of contents

- [Fluffnet frontend](#fluffnet-frontend)
  - [Intro](#intro)
  - [Table of contents](#table-of-contents)
  - [Architecture](#architecture)
  - [User flow](#user-flow)
    - [Upload image](#upload-image)
    - [Submit image](#submit-image)
    - [Provide feedback](#provide-feedback)
  - [Other features](#other-features)
  - [Todos](#todos)

## Architecture

The frontend is a simple, standalone React SPA made up of 5 main components that also serve as the sections for the site:

- Header - the website title and navbar
- Upload - where you upload an image and submit it to the predictive model
- Response - where the prediction is displayed to the user
- Feedback - user can provide feedback on the accuracy of the model
- Faq - FAQ section

The website connects to 3 backend services:

- a Flask API deployed on Heroku which holds the predictive model
- a Firebase Storage service that stores images sent by the user in their feedback
- a Firebase Firestore service that stores all the data outside of the images sent by the user in their feedback

The styling was done in Sass.

## User flow

### Upload image

The user journey starts with uploading an image to the web app. There are a few checks on the uploaded file to make sure we don't send redundant requests to the backend. If the file meets the specifications, the previously-disabled `Submit` button becomes enabled and the user can move on to the next phase. If it doesn't, there are 3 things that happen:

1. The button remains disabled
2. A warning is shown to the user in the `Response` section
3. All the previous data (uploaded image and resulting predictions) are removed

### Submit image

When the user clicks the `Submit` button, the uploaded image is sent to the Flask API that analyses whether it has something fluffy in it. A temporary message is shown in the `Response` section while we're waiting for the response from the backend. Once we receive it, the `Response` section is updated with the prediction and the `Feedback` section becomes visible.

### Provide feedback

In the `Feedback` section, the user can tell the web app whether the prediction was correct. If they decide to provide the feedback, the web app connects to 2 Firebase services to store the data:

1. Cloud Storage for the images
2. Firestore for everything else

## Other features

The frontend looks great on desktop and mobile devices as well.

## Todos

- if image too big, make it smaller
  - tried a quick implementation with [compressorjs](https://github.com/fengyuanchen/compressorjs/) but the model then generated bad results, not sure why
- consider making stricter image size requirements
- dynamic loading view
