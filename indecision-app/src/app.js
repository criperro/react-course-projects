console.log('App.js is running!');

// JSX - JavaScript XML

const headers = {
  title: 'Cristian Peralta',
  subtitle: 'This is some info',
  options: ['One','Two']
};


const template = (
    <div>
      <h1>{headers.title}</h1>
      {headers.subtitle && <p>{headers.subtitle}</p>}
      <p>{(headers.options && headers.options.length > 0) ? 'Here are your options' : 'No options'}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    </div>
);

const user = {
  name: 'Cris',
  age: 29,
  location: 'Moravia'
};

function getLocation(location){
  if (location){
    return <p>Location {location}</p>;
  }
}

const templateTwo = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age > 18) && <p>Age: {user.age} </p>}
      {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
