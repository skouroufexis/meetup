import React, { Component } from 'react';
import Event from './Event';
// import {mockEvents} from './mock-events';

class EventList extends Component {
    
  render() {
    
    return (
        <ul className="EventList">
          {this.countEvents()}
        {/* {this.props.events.map(event =>
            {

                return (
                  <li key={event.id}>
                  <Event className='Event' event={event} />
                </li>
                )

            }
            
          
        )} */}
      </ul>
    );
  }

  countEvents(){
    let n=this.props.eventsNumber;
    let c;
    let events=[];
    if(this.props.events!='')
    {

      for(c=0;c<n;c++)
      {
        
        events.push(this.props.events[c]);
        
      }

    }
      let x=events.map(e=>{
       return (
              <li key={e}>
                <Event className='Event' event={e} />
              </li>
            )
      })
      return x;
  }

}

export default EventList;
