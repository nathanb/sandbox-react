# React Demo

[![Build Status](https://travis-ci.org/nathanb/sandbox-react.svg?branch=master)](https://travis-ci.org/nathanb/sandbox-react)

## Notes
I wanted to show the use of CORS with a client-side only hosted app connecting to a different hostname for server API calls. This is a deliberately over-simplified solution.

See: router options for different stages of the demo.

### [./src/client/index.js](./src/client/index.js) (main entry point)

### Enable these lines for different stages
 - [Stage 1; HTML React; basics of JSX](https://github.com/nathanb/sandbox-react/blob/master/src/client/index.js#L5).
 - [Stage 2; Encapsulating Layout, using react-router](https://github.com/nathanb/sandbox-react/blob/master/src/client/index.js#L6).
 - [Stage 3; Data... Lets render data from XHR requests](https://github.com/nathanb/sandbox-react/blob/master/src/client/index.js#L7). (Showing [`list-simple-page`](https://github.com/nathanb/sandbox-react/blob/master/src/client/components/start-people/routes.js#L7) first)
   - [Stage 3; Part 2, Cleaning up our components](https://github.com/nathanb/sandbox-react/blob/master/src/client/components/start-people/routes.js#L7) (Use `list-page` instead)
 - [Stage 4; Fancy stuff.. background-updates, using React Context](https://github.com/nathanb/sandbox-react/blob/master/src/client/index.js#L8).

## Setup

I've provided both dev mode and a simulated production mode for this project. Dev mode will enable sourcemapping, hot module reload, and live api and client reloading upon changes.  Production mode will simply build a production version of the app and boot them up in readonly mode (no volume mappings). All production flags will be set.

 - Dev Mode: `docker-compose up`
 - Production Mode: `docker-compose -f docker-compose-prod up`

## References:
 - [Getting started with React](https://reactjs.org/docs/getting-started.html#learn-react)
 - [React Router API](https://reacttraining.com/react-router/web/guides/quick-start)
 - [Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
 - [WebPack 4 config](https://webpack.js.org/configuration/)
