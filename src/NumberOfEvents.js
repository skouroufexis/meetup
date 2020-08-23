import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        number:32
      }



  render() {
    return (
      <div>
          <label id='numberOfEventsLabel'>Number of events showing:</label>
          <input id='input_numberOfEvents' type='text' value= {this.state.number} onChange={this.changeNumber}></input> 
          
      </div>
    );
  }


  changeNumber=(event)=>{
    
    let n= event.target.value;
    
    this.setState({number:n});
  }

}

export default NumberOfEvents;