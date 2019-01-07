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

let count = 0;

const addOne = () => {
  count++;
  console.log('add one');
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const resetButton = () => {
  count = 0;
  renderCounterApp();
};

const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetButton}>Reset</button>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetButton}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();