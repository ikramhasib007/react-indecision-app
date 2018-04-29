import React, { Component } from 'react';

class AddOption extends Component {
    state = {
        error: undefined
    };
  
    handleAddOption = (e) => {
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
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form onSubmit={this.handleAddOption} className="add-option">
            <input type="text" name="option" className="add-option__input" placeholder="Put your option" />
            <button type="submit" className="button">Add Option</button>
          </form>
        </div>
      );
    }
  }

  export default AddOption;