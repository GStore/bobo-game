# Tech used
[back](../README.md)

### Server
Node and Express are used for the server component.  
This will serve the ui and provide a small api to get back the data and images.  The image location should be configurable.


### UI 
The UI uses Vue.js 

### Config 
The server has it's own webpack config.  The UI is configured with vue.config.js.

### Environment variables 
The project uses [dotenv](https://www.npmjs.com/package/dotenv) which allows for defining environment variables in a .env file.  The form used is similar to regular environment variable definition ((windows icon) set ENV_VAR=somevar (linux/mac icon) export ENV_VAR=somevar).  

example.env... 

`ENV_VAR=somevar`

This variable is now available in Node.js as: process.env.ENV_VAR

Environment variables used by this project can be viewed [here](env.md)

[back](../README.md)