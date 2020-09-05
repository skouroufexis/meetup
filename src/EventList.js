import React, { Component } from 'react';
import Event from './Event';
// import {mockEvents} from './mock-events';

class EventList extends Component {
    
  render() {
    if (this.props.events.length>0)
      {

        let totalEvents=this.props.events;
        let n=this.props.eventsNumber;
        let c;
        let shownEvents=[];

        for (c=0;c<n;c++)
        {
          if(c<totalEvents.length)
          {
            shownEvents.push(totalEvents[c]);
          }
          
        }

        console.log(shownEvents);

      return (
          <ul className="EventList">
          {shownEvents.map(event =>
            <li key={event.id}>
              <Event className='Event' event={event} />
            </li>
          )}
        </ul>

        // <ul className="EventList">
        //   <li key={this.props.events[0].id}>
        //       <Event className='Event' event={this.props.events[0]} />
        //     </li>
        // </ul>
      );
    }

    else
    {
      return 'loading';
    }
  }
}

export default EventList;
