# Fluffnet frontend

## Intro

Frontend for a web app that can predict whether an image has something fluffy in it. Go...

- [here](https://github.com/mihailthebuilder/fluffnet) for info and source code on the backend
- [here](https://mihailthebuilder.github.io/fluffnet-front) for the live site

## Architecture

The frontend is a simple React SPA made up of 5 main components:

- Header - the website title and navbar
- Upload - where you upload an image and submit it to the predictive model
- Response - where the prediction is displayed to the user
- Feedback - user can provide feedback on the accuracy of the model
- Faq - FAQ section

## UX flow

## Todos

- if image too big, make it smaller
  - tried a quick implementation with [compressorjs](https://github.com/fengyuanchen/compressorjs/) but the model then generated bad results, not sure why
- consider making stricter image size requirements
- dynamic loading view
