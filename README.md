# React Demo

## Notes
I wanted to show the use of CORS with a client-side only hosted app connecting to a different hostname for server API calls. This is a deliberately over-simplified solution.

See: router options for different stages of the demo.

 - [./src/client/index.js](./src/client/index.js) (main entry point)

## Setup

I've provided both dev mode and a simulated production mode for this project. Dev mode will enable sourcemapping, hot module reload, and live api and client reloading upon changes.  Production mode will simply build a production version of the app and boot them up in readonly mode (no volume mappings). All production flags will be set.

 - Dev Mode: `docker-compose up`
 - Production Mode: `docker-compose -f docker-compose-prod up`

## References:
 - [Getting started with React](https://reactjs.org/docs/getting-started.html#learn-react)
 - [React Router API](https://reacttraining.com/react-router/web/guides/quick-start)
 - [Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
 - [WebPack 4 config](https://webpack.js.org/configuration/)
