'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Cristian Peralta'
  ),
  React.createElement(
    'p',
    null,
    'This is some infoss'
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
  name: 'Cristian',
  age: '22'
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

var exercise = React.createElement(
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
    getLocation(user.location)
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(exercise, appRoot);
