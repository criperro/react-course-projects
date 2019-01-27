class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['option 1', 'option 2', 'option3']
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render(){
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header title={title} subtitle={subtitle} /> 
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        ></Action>   
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {

  render(){
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          {
            this.props.options.map((option) => {
              return <Option key={option} optionText={option} />
            })
          }
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

  onFormSubmit(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      alert(option);
    }
  };

  
  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" name="option" />
        <button onClick={this.handleAddOption} >Add Option</button>  
      </form>
    );
    
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));