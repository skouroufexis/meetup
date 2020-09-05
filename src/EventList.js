import React, { Component } from 'react';
import Event from './Event';
// import {mockEvents} from './mock-events';

class EventList extends Component {
    
  render() {
    if (this.props.events>0)
      {
      return (
          <ul className="EventList">
          {this.props.events.map(event =>
            <li key={event.id}>
              <Event className='Event' event={event} />
            </li>
          )}
        </ul>
      );
    }

    else
    {
      return 'loading';
    }
  }
}

export default EventList;
