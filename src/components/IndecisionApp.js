import React, { Component } from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
    state = {
        options: [],
        selectedOption: undefined
    }
  
    handlePick = () => {
      let option = Math.floor(Math.random() * this.state.options.length);
      this.setState(() => ({selectedOption: this.state.options[option]}));
    }

    handleClearSelectedOption = () => {
      this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    }
    
    handleAddOption = (option) => {
        if(!option) {
          return 'Enter a valid value to add item.'
        } else if(this.state.options.indexOf(option) > -1) {
          return 'This option has already exists.';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)}));
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
    
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className="container">
            <Action 
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
            <div className="widget">
              <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption
                handleAddOption={this.handleAddOption}
              />
            </div>
          </div>
          <OptionModal 
            handleClearSelectedOption={this.handleClearSelectedOption} 
            selectedOption={this.state.selectedOption}
          />
        </div>
      );
    }
  }

  export default IndecisionApp;