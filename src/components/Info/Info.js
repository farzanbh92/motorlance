import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mr-4 text-right mt-8" htmlFor="date">
            تاریخ
          </label>
          <input
            className="border-2 border-gray-400 rounded w-full py-2 px-3 text-right "
            id="date"
            type="text"
            name="date"
            value={this.props.date}
            onChange={this.props.handleInputChange}/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mr-4 text-right mt-8" htmlFor="stateName">
            نام استان
          </label>
          <input
          className="border-2 border-gray-400 rounded w-full py-2 px-3 text-right "
            id="stateName"
            type="text"
            name="stateName"
            value={this.props.stateName}
            onChange={this.props.handleInputChange}/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mr-4 text-right mt-8" htmlFor="university">
            نام دانشگاه
          </label>
          <input
          className="border-2 border-gray-400 rounded w-full py-2 px-3 text-right "
            id="university"
            type="text"
            name="university"
            value={this.props.university}
            onChange={this.props.handleInputChange}/>
        </div>
      </>
    );
  }
}

export default Info;