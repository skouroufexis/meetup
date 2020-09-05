import React, { Component } from 'react';
import Event from './Event';
// import {mockEvents} from './mock-events';

class EventList extends Component {
    
  render() {
    
    return (
      //   <ul className="EventList">
      //   {this.props.events.map(event =>
      //     <li key={event.id}>
      //       <Event className='Event' event={event} />
      //     </li>
      //   )}
      // </ul>
      <div>
        this.eventCounter();
      </div>
      
    );
  }


  eventCounter(){
    let totalEvents=this.state.events;

    return totalEvents[2];
  }

}

export default EventList;
