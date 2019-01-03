'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var headers = {
  title: 'Cristian Peralta',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    headers.title
  ),
  headers.subtitle && React.createElement(
    'p',
    null,
    headers.subtitle
  ),
  React.createElement(
    'p',
    null,
    headers.options && headers.options.length > 0 ? 'Here are your options' : 'No options'
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

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age > 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age,
    ' '
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
