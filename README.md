# namefy


# Description

> A fun project that  on A [RESTful API for namefy](https://agify.io/). Estimates your age based on your first name.
The app mocks a backend using JSON server, it searches for s username in the database to return the age and creates one if it does not exists. 


## Built With

This project was built using:

- Javascript
- Html5
- Css3
- Bootstrap




## Getting Started

To get the content of this project locally you need to run this command in your terminal:

- git clone ```git@github.com:Kalunge/namefy.git``` 
- `cd namefy`
- `npm install`
- run the index.htm file in your browser, beware of using live server if you have autosave in your vscode as it triggers unwanted refresh. 

## Test

For tracking linter errors locally you need to follow these steps:

- After cloning the project you need to run this command

  > `npm install`
  > This command will download all the dependancies of the project

- Add json server to create a backend for the application
> `npx npm install -g json-server`

- Start JSON Server
  > `json-server --watch db.json`

- For tracking the linter errors in HTML file run:
  > `npx hint .`


- For tracking the linter errors in CSS file run:

  > `npx stylelint "\*_/_.{css,scss}"`

- And For tracking the linter errors in JavaScript file run:

  > `npx eslint .`

  


## Author

##### 👤 **Kalunge**

- GitHub: [@kalunge](https://github.com/kalunge)
- Twitter: [@kalunge](https://twitter.com/titus_muthomi)
- LinkedIn: [kalunge](https://linkedin.com/in/titus_muthomi)


##  Contributing

Feel free to check the [issues page](https://github.com/Kalunge/namefy/issues)

## Show your support

Give a :star: if you like this project!

## Acknowledgments

- Much appreciation to the the EntireMoring staff and student community
- Api Provided by [abibliadigital](https://github.com/marciovsena/abibliadigital/blob/master/DOCUMENTATION.md)


