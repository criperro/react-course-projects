'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var headers = {
  title: 'Cristian Peralta',
  subtitle: 'This is some info'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    headers.title
  ),
  React.createElement(
    'p',
    null,
    headers.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Cris',
  age: 29,
  location: 'Moravia'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
