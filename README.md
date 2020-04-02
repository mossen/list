# Front-End Quiz

This is a test that I have done for a front-end role. You can find the quiz in [here](https://github.com/mossen/list/blob/master/quiz.pdf)
<br />
Demo at [https://mossen-list.netlify.com/](https://mossen-list.netlify.com/)

## Solution architecture

React.js has been used as the main framework and tailwindcss as CSS framwork:

* [React](https://github.com/facebook/react)
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
* [tailwindcss](https://tailwindcss.com/)

## Getting started

These instructions will get you a copy of the project up and running on your local machine. 

### Prerequisites

* Application environment
   ```
   node v13.10.1
   npm 6.13.7
   ```
* Local development & builds
   ```
   node v13.10.1
   npm 6.13.7
   ```
* Local development & builds (using Docker)
   ```
   Docker
   ```

### Installing

* Docker
    ```
    cd TO_PROJECT_ROOT
    INIT=1 docker-compose up
    ```
  ```INIT=1``` is needed for the first time to install everything needed.
  
  Use ```docker-compose exec www sh``` to ssh into the container and run ```npm start```.

* Local
    ```
    cd TO_PROJECT_ROOT
    npm install
    npm start
    ```

## Running the tests
```
npm test
```

### Build
```
npm build
```
### Run
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment
* [Netlify](https://www.netlify.com/)

## Built With

* [React](https://github.com/facebook/react)
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)


## Author

* **Mohsen Khodadadi** - *Initial work* - [Linkedin](https://www.linkedin.com/in/mohsen-khodadadi/u)
