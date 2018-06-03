console.log('App.js is running!')

// JSX - Javascript XML
var template = (
  <div>
    <h1>Cristian Peralta</h1>
    <p>This is some infoss</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Cristian',
  age: '22'
};

function getLocation(location){
  if (location){
    return location;
  }else{
    return 'Unknown';
  }
}

var exercise = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(exercise, appRoot);
