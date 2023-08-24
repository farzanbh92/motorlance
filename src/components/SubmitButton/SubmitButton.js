import React, { Component } from 'react';

class SubmitButton extends Component {
  render() {
    const { name, bgColor, txtColor } = this.props;
    return (
     <button
          className={'py-2 w-64 rounded border-2 border-blue-700 font-semibold mx-4'}
          style={{backgroundColor:bgColor,color:txtColor}}
          type="submit"> 
          {name}
      </button>
    );
  }
}

export default SubmitButton;