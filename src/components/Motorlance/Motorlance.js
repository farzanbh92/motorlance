import React, { Component } from 'react';
import Info from '../Info/Info';
import MissionInfo from '../MissionInfo/MissionInfo';
import SubmitButton from '../SubmitButton/SubmitButton';

class Motorlance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      stateName: '',
      university: '',
      missions: '',
      cure: '',
      referral: '',
      death: ''};
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', this.state);
  };

  render() {
    
    return (

    <div className='bg-gray-300 w-full py-4'>

      <div className="w-1/2 mx-auto bg-white pt-4 rounded">

      <div className='py-4 font-semibold text-blue-800 border-t-2 mt-4 border-b-2'>
        موتورلانس
     </div>

        <form className="px-8 py-6 mb-4" onSubmit={this.handleSubmit}>

          <Info
            date={this.state.date}
            stateName={this.state.stateName}
            university={this.state.university}
            handleInputChange={this.handleInputChange}/>

<div className='py-4 font-semibold text-blue-800 my-6 text-right '>
        نتایج کل ماموریت ها
     </div>

          <MissionInfo
            missions={this.state.missions}
            cure={this.state.cure}
            referral={this.state.referral}
            death={this.state.death}
            handleInputChange={this.handleInputChange}/>

          <div className="flex items-center justify-center py-8">
           <SubmitButton name={"ذخیره اطلاعات"} bgColor={'rgb(40,88,190)'} txtColor={'white'}/>
           <SubmitButton name={'انصراف'} bgColor={'white'} txtColor={'rgb(40,88,190)'}/>
          </div>

        </form>

      </div>

    </div>
    );
  }
}

export default Motorlance;