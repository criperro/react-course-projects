'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var headers = {
  title: 'Cristian Peralta',
  subtitle: 'This is some info',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  console.log("el valor es " + option);
  if (option) {
    headers.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

var onRemoveAll = function onRemoveAll() {
  headers.options = [];
  renderTemplate();
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
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
      'p',
      null,
      headers.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      headers.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();
