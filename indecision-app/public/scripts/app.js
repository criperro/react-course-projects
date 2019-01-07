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

var count = 0;

var addOne = function addOne() {
  count++;
  console.log('add one');
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var resetButton = function resetButton() {
  count = 0;
  renderCounterApp();
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: resetButton },
    'Reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetButton },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
