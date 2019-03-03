# Disco-Tv

Disco-Tv is a Single-Page-Application that utilizes the TMDB-API, enabling for search and discovery of TV shows

## Features
 - Access a list popular TV shows that is updated on a daily basis
 - Get detailed information for specific a TV show
 - Search for a specific TV show to retrieve detailed information

## Tech
Disco-TV was built with:
* [Ruby on Rails](https://rubyonrails.org/) - backend utilizing the View-Controller of the Rails framework
* [React](https://reactjs.org/) - frontend UI utilizing [React-Router-Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* [Webpacker](https://github.com/rails/webpacker) - bundler easing use of React
* [Ant Design](https://ant.design/docs/react/introduce) - great React UI library with out of the box components
* [Themoviedb](https://github.com/ahmetabdi/themoviedb/) - Ruby wrapper for [The Movie Database API](https://www.themoviedb.org/documentation/api)

Other resources used:
- [react-slick](https://github.com/akiran/react-slick) - carousel component built with React

## To-Do:
- [x] Return list of popular TV shows from TMDB API
- [x] Create ability to search TV shows with use of a search bar
- [x] Return list of related TV shows with given search params
- [x] Return more information upon selecting a specific TV show
- [x] Create Rspec tests for controller actions

##### Problem:
Generate an application that enables users to view and request data provided by the TMDB Api, while providing a user-friendly and intuitive UI.

##### Solution:
Create a Single Page Application that utilizes the Rails web-framework for the backend, paired with a library or service to establish connections and requests to the TMDB Api, enabling a controller to utilize the service or library methods, providing all resources needed to a single page that will handle all frontend UI.


##### Reasoning for Technical Choices:
When debating the development structure for this project, there were two main approaches I was considering:
1.	Create a SPA using the Rails framework for the backend, and create a library or service that handles the connections/requests to the TMDB api, allowing for a controller to perform actions utilizing inherited methods from the generated library or service. With this setup, a bundler such as Webpacker would be used to allow a React based frontend to handle the UI, while being able to utilize Rails helpers and the proper JavaScript tags in a single view.

2.	Create a Rails application in API-only mode, paired with a library or service that handles the connections/requests to the TMDB api, allowing for the api controller to perform actions containing inherited methods from the created library or service. Then essentially create an entirely separate app to serve as a client-app for the Frontend. With this approach I would need to restructure some of the configuration, and add back some of the middleware that was stripped from the use of the API-only mode. Along with the adding back some middleware, I would also need to configure the apps to run on separate serves, and set up the client-app to utilize a proxy directing it to the port being used by the rails server.

After considering the options, and taking in the time constraints, the requirements for this project, and my current development skills, I decided to take the route of creating this project as a Single Page Application.

##### Additions to be Made:
In the current state of this project, it does not yet include any unit tests targeting the front-end. With the front-end developed using React, a JavaScript library, I have looked into Jest and other testing frameworks specifically for creating tests for JS based UIs, and plan to familiarize myself with the toolsets on how to develop proper unit tests.

##### With Additional Time:
If initializing this project with a long-term development process in mind, I would take the time and approach of setting up a Rails backend to handle user authentication, sessions, and connections with the TMDB Api, and develop a React frontend as a completely separate app. The reason being is that it would make it more conducive for other developers to help by separating the environments, whether they be more experience in frontend or backend development.

