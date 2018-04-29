class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    const countString = localStorage.getItem('count');
    const count = parseInt(countString, 10);

    if(!isNaN(count)){
      this.setState(() => ({ count }));
    }
  }
  

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count);
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne} className="btn btn-primary m-2">+1</button>
        <button onClick={this.handleMinusOne} className="btn btn-danger m-2">-1</button>
        <button onClick={this.handleReset} className="btn btn-default m-2">Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
