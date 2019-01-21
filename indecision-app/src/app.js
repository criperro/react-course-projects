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
  handlePick(){
    alert('handlePick');
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll(){
    console.log(this.props.options);
  }
  render(){
    return(
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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