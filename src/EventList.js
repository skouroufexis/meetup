import React, { Component } from 'react';
import Event from './Event';
// import {mockEvents} from './mock-events';

class EventList extends Component {
    
  render() {
    console.log(this.props.events);
    if(this.props.events.length>0)
    {
      console.log(this.props.events);
      return (

      //   <ul className="EventList">
        
        
      //     <li key={1}>
      //       <Event className='Event' event={this.props.events[0]} />
      //     </li>
        
      // </ul>
      // this.eventCounter()
        <ul className="EventList">
        
        {this.props.events.map(event =>
          <li key={event.id}>
            <Event className='Event' event={event} />
          </li>
        )}
      </ul>
        
    );
    }

    else {
      return('loading');
    }
    
  
}

  eventCounter(){
  
    

}
}
export default EventList;
