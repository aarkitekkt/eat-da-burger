# Eat-da-burger

Repository: https://github.com/aarkitekkt/eat-da-burger

Deployed: https://aarkitekkt-eat-da-burger.herokuapp.com/

## Overview
​
The purpose of this application is to track which hamburgers the user would like to eat and which hamburgers the user has eaten.
​
### Gallery
​
Home Page:
![Home](/public/screengrabs/Home.JPG "Home Page")

View All Employees:
![All Employees](/public/screengrabs/Responsive.JPG "View All Employees")
​
Responsive:
![Responsive](/public/screen-captures/department.JPG "Responsive Design")

Add Burger:
![Add Burger](/public/screengrabs/Add-Burger.gif "Add New Burger")

Devour Burger:
![Devour Burger](/public/screengrabs/Devour-Burger.gif "Devour Burger")

​
### Problem

A challenge faced with this application was figuring out how to use handlebars to separate the table data into separate lists depending on if they have been devoured or not.
### Solution
​
The solution I found was to use either #unless or #if in the handlebars template.  Becuase the "devoured" column takes a boolean value, these handlebars keywords can be used to filter only values that are true or false and place them into the correct list.

## Tech and Features Used
​
* MYSQL
* Express-Handlebars npm
* Handlebars
* Express npm
* Inquirer npm
* Node JS
* Bootstrap
* CSS
* Jquery
​
## How to use
​
From the home page, enter the name of a hamburger you would like to eat and press the "New Burger" button.  This hamburger name will be added to the "Burgers to Eat" list.  When you have eaten that hamburger, press the "Devour" button next to the hamburger name to move it into the "Devoured" list.
​
## Technical Overview
​
1. This project is constructed using the MVC design patter.
2. A connection.js file establishes the connection the mysql database.
3. The orm.js file, requires the connection.js and defines the methods for each databse queary that will be used in the application including a method to select all from the database, insert a row into the database, and update a boolean (devoured) of an idividual burger.
4. The burgers.js file uses jquery to make the appopriate ajax call depending on which button is clicked on the page.  
5. The burgers_controllers.js file defines the routes and type of request that will be made given a defined user endpoint.
6. Burger.js is the model, which requires the orm.js
7. The html that makes up the body is in an index.handlebars template and takes data from the controllers and places it into the html.
8. The server.js file establishes the connection to the server and requires the middleware to connect to handlebars. 
