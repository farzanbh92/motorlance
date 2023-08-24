import React, { Component } from 'react';

class MissionInfo extends Component {
  render() {
    return (
      <>
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mr-4 text-right mt-8" htmlFor="missions">
           کل ماموریت
          </label>
          <input
          className="border-2 border-gray-400 rounded w-full py-2 px-3 text-right "
            id="missions"
            type="number"
            name="missions"
            value={this.props.missions}
            onChange={this.props.handleInputChange}/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mr-4 text-right mt-8" htmlFor="cure">
           کل درمان در محل 
          </label>
          <input
          className="border-2 border-gray-400 rounded w-full py-2 px-3 text-right "
            id="cure"
            type="number"
            name="cure"
            value={this.props.cure}
            onChange={this.props.handleInputChange}/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mr-4 text-right mt-8" htmlFor="referral">
           کل اعزام به مراکز درمانی
          </label>
          <input
          className="border-2 border-gray-400 rounded w-full py-2 px-3 text-right "
            id="referral"
            type="number"
            name="referral"
            value={this.props.referral}
            onChange={this.props.handleInputChange}/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mr-4 text-right mt-8" htmlFor="death">
           کل فوت
          </label>
          <input
          className="border-2 border-gray-400 rounded w-full py-2 px-3 text-right "
            id="death"
            type="number"
            name="death"
            value={this.props.death}
            onChange={this.props.handleInputChange}/>
        </div>

      </>
      
    );
  }
}

export default MissionInfo;