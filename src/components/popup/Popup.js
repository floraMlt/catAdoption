// Popup with informations of an appointment (date and time)
import React, { Component } from "react";
import "./Popup.css";

class Popup extends Component {
    render() {
    const cat = this.props.catReserved
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Thank you !</h1>
          <p  id="textPopup">Let's meet at "{cat.location}" the {this.props.dateReserved} at {this.props.hourReserved} to finalize {cat.name}'s adoption.</p>
        <button id="buttonClose" onClick={this.props.closePopup}>Close</button>
        </div>
      </div>
    );
  }
}

export default Popup;