import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        number:32
      }



  render() {
    return (
      <div className='container'>
        <div className='container'>
          <div className='row'>
            <label className='col-12'>No. of events displayed: </label>
            <input className='col-2'  id='input_numberOfEvents' type='text' value= {this.state.number} onChange={this.changeNumber}></input>
          </div> 
        </div>
      </div>
    );
  }


  changeNumber=(event)=>{
    
    let n= event.target.value;
    
    this.setState({number:n});
    this.props.updateEventsNumber(n);
  }

}

export default NumberOfEvents;