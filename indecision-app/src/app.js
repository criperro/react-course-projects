console.log('App.js is running!');

// JSX - JavaScript XML

const headers = {
  title: 'Cristian Peralta',
  subtitle: 'This is some info',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  console.log("el valor es " + option);
  if(option){
    headers.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const onRemoveAll = () => {
  headers.options = [];
  renderTemplate();
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{headers.title}</h1>
      {headers.subtitle && <p>{headers.subtitle}</p>}
      <p>{(headers.options && headers.options.length > 0) ? 'Here are your options' : 'No options'}</p>
      <p>{headers.options.length}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <button onClick={onRemoveAll}>Remove All</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button >Add Option</button>
        
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();