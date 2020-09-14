import React, { Component } from 'react';
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component {
    state = {
        number:32,
        infoText:''
      }



  render() {
    return (
      <div className='container'>
        <div className='container'>

          <ErrorAlert text={this.state.infoText} />
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
    if (n>0 || n=='')
      {        
        this.setState({infoText:''})
      }

    else
      {
        this.setState({infoText:'Please enter a valid event number'})
      }
    


    
  }

}

export default NumberOfEvents;