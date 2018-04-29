import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button 
        onClick={props.handleDeleteOptions}
        className="button button__link"
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
    {
      props.options.map((option, i) => (
        <Option 
          key={option+i} 
          count={i+1}
          handleDeleteOption={props.handleDeleteOption} 
          option={option} 
        />
      ))
    }
  </div>
);

  export default Options;