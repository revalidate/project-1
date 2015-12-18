#WDI Project 1: Bullshit-o-meter

##Intro

Mainstream media isn't always the most reliable resource. It's hard to know which news organizations are credible and trustworthy. Does the organization have an underlying agenda? Who is funding them? At a time when more and more news is being consumed online and at a faster consumption rate, it's hard to keep all your facts staight. Often, people correlate news credibility with whether they know of the news organization or not. 

Bullshit-o-meter is an independent platform that keeps news organizations accountable. It strives to be a space where users can rate and review existing news organizations or add new ones that are not already listed.

Below is an overview of my process and the tools I used to create my first full-stack web application. Users are able to browse through various news organizations and click on "more info" to learn more about them and what other users think of them.

![Alt header](http://i.imgur.com/lEyCdwY.png?1)
![Alt homepage](http://i.imgur.com/BHkZhgh.png?1)
![Alt showpage](http://i.imgur.com/agMulSW.png?1)

##Technologies Used
* **MEAN stack** sans Angular  
  * **Node.js**
  * **Express**
  * **Mongo**
  * **JavaScript**
  * **HTML**
  * **CSS**
  * **HTML5**
* **MongoDB** implemented two models (NewsOrg & Review) to a Mongo Database, using a one-to-many relationship between models.
* **Express API** built an Express Application that has both HTML and JSON API endpoints for News Organizations and Reviews.
* **RESTful Routes** designed CRUD routes using the REST convention relevant to user experience.
* **AJAX** Leverage AJAX to fetch JSON data from the backend.
* **jQuery** used jQuery to add interactivity and render data on the client-side on 3 different HTML endpoints.
* **Data Validation** input forms require different types of data (accept dates, numbers & strings) and handle incorrect form inputs during create/update by validating data.
* **Git** version control used at every stage of project articulating progress throughout the week
* **Visual Design** wire framing & user stories were essential to keep branding consistent. Used Bootstrap, CSS, & HTML for all styling.
* **Heroku**

##Installation

#####Step 1
Fork and clone this project repo.

#####Step 2 
To run this application, you would need to install the proper dependencies (mongodb, mongoose, nodemon, express, body-parser & moment) onto your computer.

```
$ npm install
```

#####Step 3
In your terminal, run nodemon and mongod simultaneously

```
$ mongod  

$ nodemon
```

#####Step 4
To populate your database, run seed.js file in terminal.

```
$ node seed.js
```

#####Step 5
You're ready to go! Go to [http://localhost:3000/](http://localhost:3000/) to check out my project.

##Deployment
This application is already deployed on heroku [here](https://young-oasis-4527.herokuapp.com/).

##Planned Features

* **Comprehensive Database** with all news organizations to date. 

* **Search Bar** on the home page above all the news organizations so a user can type in any news organization's name and it will populate the page with only relevant organizations.

* **Funding Model** would be an additional resource for users to see what each news organizations source of revenue is. Ideally would love to create d3 data visualizations for this Model. 