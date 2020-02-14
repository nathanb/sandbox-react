# React Demo

[![Build Status](https://travis-ci.org/nathanb/sandbox-react.svg?branch=master)](https://travis-ci.org/nathanb/sandbox-react)

## Demo
For this [Live Demo](http://sandbox-react.iws.io/), I disabled the API hosting; so it kind of fakes the data saving/adding. But it still shows the code-splitting and basic navigation of a hosted client-side only React app.

## Notes
I wanted to show the use of CORS with a client-side only hosted app connecting to a different hostname for server API calls. This is a deliberately over-simplified solution.

See: router options for different stages of the demo.

### [./src/client/index.js](./src/client/index.js) (main entry point)

### Enable these lines for different stages
 - [Stage 1; HTML React; basics of JSX](https://github.com/nathanb/sandbox-react/blob/master/src/client/index.js#L5).
 - [Stage 2; Encapsulating Layout, using react-router](https://github.com/nathanb/sandbox-react/blob/master/src/client/index.js#L6).
 - [Stage 3; Data... Lets render data from XHR requests](https://github.com/nathanb/sandbox-react/blob/master/src/client/index.js#L7). (Showing [`list-simple-page`](https://github.com/nathanb/sandbox-react/blob/master/src/client/components/start-people/routes.js#L7) first)
   - [Stage 3, Part 2; Cleaning up our components](https://github.com/nathanb/sandbox-react/blob/master/src/client/components/start-people/routes.js#L7) (Use `list-page` instead)
 - [Stage 4; Fancy stuff.. background-updates, using React Context](https://github.com/nathanb/sandbox-react/blob/master/src/client/index.js#L8).
 - [Stage 5; Forms & Validation](https://github.com/nathanb/sandbox-react/blob/master/src/client/index.js#L9).
   - [Stage 5, Part 2; Breaking apart re-usable components](https://github.com/nathanb/sandbox-react/blob/master/src/client/components/start-forms/routes.js#L10) (Enable this line).

## Setup

I've provided both dev mode and a simulated production mode for this project. Dev mode will enable sourcemapping, hot module reload, and live api and client reloading upon changes.  Production mode will simply build a production version of the app and boot them up in readonly mode (no volume mappings). All production flags will be set.

 - Dev Mode: `docker-compose up`
 - Production Mode: `docker-compose -f prod.yml up`
 - Run tests in the container: `docker-compose -f test.yml run test` or `./bin/t`

## References:
 - [Getting started with React (ui framework)](https://reactjs.org/docs/getting-started.html#learn-react)
 - [React Router API (internal routing for SPA)](https://reacttraining.com/react-router/web/guides/quick-start)
 - [Bootstrap 4 (styling framework)](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
 - [WebPack 4 (build toolchain)](https://webpack.js.org/configuration/)
 - [Babel 7 (transpiler for ES5/browsers)](https://babeljs.io/docs/en/)

## Server-side frameworks
 - [@hapi/joi (server-side validation framework)](https://hapi.dev/family/joi/)
 - [Express 4 (minimalist web framework - simplifies http)](https://expressjs.com/en/guide/routing.html)
 - [Node.js 12 LTS](https://nodejs.org/dist/latest-v12.x/docs/api/)
