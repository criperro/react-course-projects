class IndecisionApp extends React.Component {
  render(){
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['option 1', 'option 2', 'option3'];
    return(
      <div>
        <Header title={title} subtitle={subtitle} /> 
        <Action />   
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render(){
    return(
      <div>
        <ol>
          {
            this.props.options.map((option) => {
              return <Option key={option} optionText={option} />
            })
          }
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render(){
    return(
      <p>
        {this.props.optionText}
      </p>
    );
  }
}

class AddOption extends React.Component {
  render(){
    return(
      <form>
        <input type="text" name="option" />
        <button >Add Option</button>  
      </form>
    );
    
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));