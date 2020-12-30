## Overview

Responsive application showing products to the user with pagination and filters.

## Quick Start

To run app, simply write `npm start` in command line.

## E2E

For E2E testing we are using the [Cypress](https://www.cypress.io/) framework.

## Technologies and libraries used:
- React
- Redux-observable + rxJs
- Styled-components
- Jest + React-testing-library
- Cypress

## Functionalities:
- Products can be filtered by:
    - searchPhrase
    - active/promo status
- Pagination
    - items per page
    - current page


## Disclaimer
As the login is not fully implemented, testing how app behaves when user is logged in can be achieved by changing authInitState.isLoggedIn from `false` to `true`.

### Available Scripts

In the project directory, you can run:

#### `e2e:run`

Runs Cypress E2E tests in a headless mode (the browser window is not visible)

#### `e2e:open`

Opens the Cypress UI, allowing to run and watch E2E tests

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run coverage`

Launches the test runner in the coverage report generation mode.<br />
See [this](https://create-react-app.dev/docs/running-tests/#coverage-reporting) section for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
