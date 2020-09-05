import React, { Component } from 'react';
import Event from './Event';
// import {mockEvents} from './mock-events';

class EventList extends Component {
    
  render() {
    
    if(this.props.events.length!=0)
    {


    
    return (
      //   <ul className="EventList">
        
      //   {this.props.events.map(event =>
      //     <li key={event.id}>
      //       <Event className='Event' event={event} />
      //     </li>
      //   )}
      // </ul>

        this.eventCounter()
      
      
    );
  }
}

  eventCounter(){
    console.log(this.props.events);
    console.log(this.props.events.length);

    if(this.props.events.length!=0)
    {
    return(
      
      <ul className="EventList">
        
        
          <li key={1}>
            <Event className='Event' event={this.props.events[0]} />
          </li>
        
      </ul>

    )
  }
    // return(
    //   <ul className="EventList">
        
    //     {this.props.events.map(event =>
    //       <li key={event.id}>
    //         <Event className='Event' event={event} />
    //       </li>
    //     )}
    //   </ul>
    // )
    
  }

}

export default EventList;
