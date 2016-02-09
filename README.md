# Webpack + React project template

Based on [Pro React, Appendix A: Webpack for React](http://www.pro-react.com/materials/appendixA/).

## What it does

* ECMAScript 2015
* Optimized, minified, compressed production builds
* Hot module reloading
* End-to-end tests

## Project structure

* `app/` – Front-end source code (ES2015/JSX, CSS)

## Getting started

### Get code and install dependencies

    git clone git@github.com:leonidas/webpack-react-project-template
    npm install

### Run development server

    npm start
    open http://localhost:8080

### Run tests

    npm install -g webdriver-manager
    webdriver-manager update
    webdriver-manager start

    npm start

    npm test

### Production build

    npm run build

## TODO

* Add a server and proxy some endpoints to it
* Start the required server components from `npm test`