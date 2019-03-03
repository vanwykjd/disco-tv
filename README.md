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

