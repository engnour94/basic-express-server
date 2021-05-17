# basic-express-server

Nour Abu El-Enein

401 class 02 lab
# LAB - 02
## server-deployment-practice
### Author: Nour Abu El-Enein

- [ci/cd](https://github.com/engnour94/basic-express-server/actions) (GitHub Actions)

- [Repo link](https://github.com/engnour94/basic-express-server)

- [main Deployed heroku](https://nour-basic-server.herokuapp.com/)
 
### Setup

#### `.env` requirements

- `PORT` - 3000

#### Running the app

- `npm start`
-  `npm i` : to install the required dependencies

-  Endpoint: `/person?name=name`

Returns Object
{
"name" : "your Name"
}

 - Endpoint: `/`
  - Returns message

    ```

    ''welcome to server.js';

   

    ```
- Endpoint: `/person`
  - Throws an error 500
  - Returns an Object

    ```

    {
    error:err,
    status: 500,
    message: err.message,
    route: req.path,
  
    }

    ```
- Endpoint: **anything else ..**
  - Returns an error 404
  - Returns an Object

    ```

  {
    status: 404,
    message: 'page not found something went wrong',
  }

    ```
#### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`

