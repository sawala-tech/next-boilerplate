# Sawala NextJS Boilerplate

An opinionated boilerplate to kickstart projects using NextJS

## Features

- 👏🏼 Next 11
- ⚛️ React 17
- 🌊 Custom Document, App, Error and 404 Page!
- ⌨️ Type safety using TypeScript in strict mode
- 👀 Lint your code with ESLint & Stylelint
- 🌈 Prettier for consistent code style
- 🔨 Jest + [Testing Library](https://testing-library.com/) for tests
- ☝️ Husky + lint-staged for code quality assurance
- ⚙️ .vscode folder for consistent and opiniated code style

## Variation branches

### Default Instalation

```sh
git clone --single-branch git@github.com:sawala-tech/next-boilerplate.git
```

## Getting started

Before you can start developing your awesome application you need to install the project's dependencies. Make sure you have Node (>= 10.13.0) and NPM / Yarn installed and run:

```sh
yarn install
```

### ⌨️ Development

Once all dependencies have been installed you can start development. To start a development server on [http://localhost:3000](http://localhost:3000) run:

```sh
npm run dev
```

### 🖥 Production

To run your application in production make sure to run a build first:

```sh
npm run build
```

And then start you application with a provided port number (defaults to 3000 if not provided):

```sh
PORT=8080 yarn start
```

### 🖨 Static

You can export your application to a static website as well:

```sh
yarn export
```

This will render static HTML pages into `./out`

### 🧐 Linters

The boilerplate provides a couple of linters to help you keep an eye on code consistency and type safety. There are three linters: one for CSS, one for TypeScript and one for type safety. You can use each of them separately using the following commands:

```sh
yarn lint:ts
```

TIP: To get the most out of your linters install the corresponding (Stylelint, TSLint) plugins for your editor or IDE

### Prettier

Prettier helps you to enforce consistent (opinionated) code style.

### 🤖 Tests

You can write your tests using Jest and Enzyme. You can run all test with the following command

```sh
yarn test
```
