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

        this.eventCounter
      
      
    );
  }


  eventCounter(){
    <ul className="EventList">
        
        {this.props.events.map(event =>
          <li key={event.id}>
            <Event className='Event' event={event} />
          </li>
        )}
      </ul>
  }

}

export default EventList;
