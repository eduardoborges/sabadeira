# Stone Admin Dashboard

[![Build Status](https://stonepagamentos.visualstudio.com/frt-celebro/_apis/build/status/stone-payments.stone-admin-dashboard?branchName=master)](https://stonepagamentos.visualstudio.com/frt-celebro/_build/latest?definitionId=2039&branchName=master)

## [Will you contribute?](./CONTRIBUTING.md)

### TL;DR

Clone this repo and run:

```bash
npm install # to install deps
npm test # to run tests
npm start # to run app
```

## Technological Decisions

### React

A JavaScript library for building user interfaces

### Redux

A consistent and widely accepted state manager in the javascript community. It has an extremely simple and controllable data flow.

### TypeScript

A highly scalable Javascript superset. With it we can define the "shape of things" and not lose sight of what that object written 4 years ago has. ;)

### Architectural Decisions

![https://i.imgur.com/XBIXy1w.png](https://i.imgur.com/XBIXy1w.png)

## Base Structure of the Project

```bash
src
├── assets
│   ├── fonts
│   ├── images
│   ├── styles
│   └── ...
├── components
│   ├── form
│   │   ├── Button
│   │   ├── Form
│   │   ├── Input
│   │   └── ...
│   ├── layout
│   │   ├── Footer
│   │   ├── Title
│   │   └── ...
│   └── utils
        ├── Redirect
│       └── ...
├── helpers
│   └── dom
├── layouts
├── screens
│   ├── about
│   ├── login
│   └── todos
├── services
│   └── mocks
└── store
    └── my-domain
    │   ├── actions.ts
    │   ├── reducer.ts
    │   ├── sagas.ts
    │   └── types.ts
    ├── index.ts
    ├── reducers.ts
    ├── sagas.ts
    └── types.ts
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
