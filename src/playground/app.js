
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  handlePick() {
    let option = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[option]);
  }

  componentDidMount() {
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({ options }));
      }
    } catch(e) {
      // Dot not nothings
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter a valid value to add item.'
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option has already exists.';
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)}));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        className="btn btn-outline-dark font-weight-bold btn-lg p-3 my-3">What should I do?</button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button 
        onClick={props.handleDeleteOptions}
        className="btn btn-dark mb-3"
      >
        Remove All
      </button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      <ul className="list-group my-3">
        {
          props.options.map((option, i) => (
            <Option 
              key={option+i} 
              handleDeleteOption={props.handleDeleteOption} 
              option={option} 
            />
          ))
        }
      </ul>
    </div>
  );
}

const Option = (props) => {
  return (
      <li className="list-group-item bg-light d-flex justify-content-between">
        <span>{props.option}</span>
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            props.handleDeleteOption(props.option)
          }}
        >
          remove
        </a>
      </li>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    };

    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error}));
    if(!error)
    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} className="form-inline">
          <div className="input-group mb-2 mr-sm-2">
            <input type="text" name="option" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Put your option" />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
      </div>
    );
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));