import React, { Component } from 'react';
import Event from './Event';
// import {mockEvents} from './mock-events';

class EventList extends Component {

  constructor(props) {
    super(props);
    this.state = {eventCounter: 0};
  }
    
  render() {
    if (this.props.events.length>0)
      {
                
        let totalEvents=this.props.events;
        let n=this.props.eventsNumber;
            if(n==''){n=32;}
            if(isNaN(n)){n=32;}
        let c; //counter
        
        let shownEvents=[];

        for (c=0;c<n;c++)
        {
          if(c<totalEvents.length)
          {
            
            shownEvents.push(totalEvents[c]);
            
          }
          
        }
      return (
          <ul className="EventList">
          {shownEvents.map((event,index) =>
            <li key={event.id}>

              <Event id={index}  className='Event' event={event}  />
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
