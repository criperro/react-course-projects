console.log('App.js is running!');

// JSX - JavaScript XML

var headers = {
  title: 'Cristian Peralta',
  subtitle: 'This is some info'
}


var template = (
    <div>
      <h1>{headers.title}</h1>
      <p>{headers.subtitle}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    </div>
);

var user = {
  name: 'Cris',
  age: 29,
  location: 'Moravia'
};

var templateTwo = (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
