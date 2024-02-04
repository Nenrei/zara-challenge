# Marvel Zara Challenge
A React app to query data about Marvel characters. This project has been made for the Zara challenge.

## Installation
Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.  
This project has been created on a machine with the versions:
- **Node** v16.14.2
- **npm**: v8.5.0

1. Clone this repository:
    ```bash
    git clone https://github.com/Nenrei/zara-challenge.git
    ```

2. Navigate to the project directory:
    ```bash
    cd zara-challenge
    ```
   
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
### Starting the Development Server:
To start the development server and run the application locally:
```bash 
npm start
```
This will start the application in development mode. Open http://localhost:8080 to view it in your browser.  
This command uses `webpack-dev-server` with the configuration from `webpack.dev.js` and opens the application in a new browser window.

### Building for Development:
To build the application for development:
```bash 
npm run build:dev
```
This command uses Webpack with the configuration from `webpack.dev.js` to generate a development build.

### Building for Production:
To build the application for production:
```bash 
npm run build:prod
```
This command uses Webpack with the configuration from `webpack.prod.js` to generate a development build.

### Running Tests:
To run tests using Jest and React Testing Library:
```bash 
npm test
```
This command executes the Jest testing framework to run all tests in your project.

### Linting:
To lint the project using ESLint:
```bash 
npm run lint
```
This command uses ESLint to analyze and check the code in the `src` directory for potential issues or style violations.

## Project Structure
The project follows an organizational structure that facilitates navigation and maintenance of the source code. The directory hierarchy and its purposes are detailed below:

```
├───public
├───src
│   ├───assets
│   │   ├───icons
│   │   └───images
│   ├───components
│   │   ├───characterCard
│   │   ├───characterComic
│   │   ├───error
│   │   ├───favoriteButton
│   │   ├───header
│   │   └───searchBar
│   ├───context
│   ├───hooks
│   │   └───useFavorite
│   ├───routers
│   ├───services
│   ├───styles
│   ├───utils
│   └───views
│       ├───characterDetail
│       └───characterListView
```

- **public**: Stores static files, such as the main HTML file and other publicly accessible resources.

- **src**: The main directory that contains the application source code.

   - **assets**: Contains static resources like icons and images.

   - **components**: Houses reusable UI components, divided into subdirectories based on functionality.

   - **context**: Contains files related to the implementation of React contexts for global state management.

   - **hooks**: Holds custom hooks used in the application.

   - **routers**: Contains files related to route configuration and navigation.

   - **services**: Houses services that interact with external APIs.

   - **styles**: Contains global styling files or configurations for the application's appearance.

   - **utils**: Holds generic functions and utilities used across different parts of the application.

   - **views**: Contains components representing specific pages of the application, divided into subdirectories based on functionality.

Each directory serves a specific purpose, contributing to the modular organization and maintainability of the source code.


## Dependencies

The project utilizes the following dependencies for its functionality:

### Main Dependencies

- **axios**: A promise-based HTTP client for making requests to APIs.

- **classnames**: A utility for conditionally joining class names together.

- **prop-types**: A library for type-checking React props during development.

- **react**: The core React library for building user interfaces.

- **react-dom**: The entry point for working with the DOM in React applications.

- **react-router**: A declarative routing library for React applications.

- **react-router-dom**: DOM bindings for React Router, enabling routing in web applications.

### Development Dependencies

- **@babel/core**: The core Babel compiler for transpiling modern JavaScript.

- **@babel/eslint-parser**: Babel parser for ESLint, allowing the use of Babel's parser with ESLint.

- **@babel/preset-env**: A Babel preset that enables the use of the latest JavaScript features.

- **@babel/preset-react**: A Babel preset for transforming JSX into React-compatible code.

- **@testing-library/jest-dom**: Custom Jest matchers for testing the DOM.

- **@testing-library/react**: A library for testing React components.

- **@testing-library/user-event**: A utility for triggering user events in testing.

- **babel-loader**: A Webpack loader for using Babel with Webpack.

- **css-loader**: A Webpack loader for loading CSS files.

- **eslint**: A pluggable linting utility for JavaScript and JSX.

- **eslint-plugin-jest-dom**: ESLint plugin for Jest DOM.

- **eslint-plugin-react**: ESLint plugin for React.

- **eslint-plugin-testing-library**: ESLint plugin for testing-library.

- **file-loader**: A Webpack loader for loading files and getting URLs.

- **html-webpack-plugin**: A Webpack plugin for simplifying the creation of an HTML file.

- **jest**: A testing framework for JavaScript projects.

- **jest-environment-jsdom**: Jest environment for running tests in a DOM-like environment.

- **jsdom**: A JavaScript implementation of various web standards.

- **prettier**: A code formatter that enforces a consistent code style.

- **style-loader**: A Webpack loader for injecting styles into the DOM.

- **terser-webpack-plugin**: A Webpack plugin for minifying JavaScript using Terser.

- **webpack**: A module bundler for JavaScript applications.

- **webpack-cli**: Command-line interface for Webpack.

- **webpack-dev-server**: A development server for Webpack.

- **webpack-merge**: A utility to merge Webpack configurations.
