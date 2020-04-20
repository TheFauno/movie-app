This project was created using [Create React App](https://github.com/facebook/create-react-app) and omdbAPI.

## Description

This App uses ombdbAPI to deliver movies info and let the user add whathever movie listed by the app into favourites using localstorage

## Requirements

```
{
  "name": "movies-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.1"
  },
  "scripts": {
    "start": ".env.development react-scripts start",
    "build": ".env.production react-scripts build",
    "test": ".env.development react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

## Local Deployment

### First steps
Configure environment variables

Install npm packages: 
``` npm install ```

#### Running on local
Get sure that you have .env.development file created in project root directory, next use this command on your console:
``` npm start ```

### Build for production
Get sure that you have .env.production file created in project root directory, next use this command on your console:
``` npm run build ```

### Env files

The application uses:

.env.development for development purposes.
.env.production for production purposes.

#### Environment variables

The application uses this environment variables:
```
  REACT_APP_OMDBAPI_KEY=[yourOmdbAPIKey]
```