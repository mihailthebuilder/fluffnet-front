# Fluffnet frontend

## Intro

Frontend for a web app that can predict whether an image has something fluffy in it. Go...

- [here](https://github.com/mihailthebuilder/fluffnet) for info and source code on the backend
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

The website is a simple React SPA made up of 5 main components that also serve as the sections of the site:

- Header - the website title and navbar
- Upload - where you upload an image and submit it to the predictive model
- Response - where the prediction is displayed to the user
- Feedback - user can provide feedback on the accuracy of the model
- Faq - FAQ section

## User flow

### Upload image

The user journey starts with uploading an image to the web app. There are a few checks on the uploaded file to make sure we don't send redundant requests to the backend. If the file meets the specifications, the previously-disabled `Submit` button becomes enabled and the user can move on to the next phase. If it doesn't, there are 3 things that happen:

1. The button remains disabled
2. A warning is shown to the user in the `Response` section
3. All the previous data (uploaded image and resulting predictions) are removed

### Submit image

### Provide feedback

## Other features

## Todos

- if image too big, make it smaller
  - tried a quick implementation with [compressorjs](https://github.com/fengyuanchen/compressorjs/) but the model then generated bad results, not sure why
- consider making stricter image size requirements
- dynamic loading view
