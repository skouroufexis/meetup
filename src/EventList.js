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

    // let totalEvents=this.props.events.length;
    if(this.props.events!='')
    {

      for(c=0;c<n;c++)
      {
        //if user digits a higher number than the total number of events
        //available in a given location, do not display extra empty
        // event boxes
        if(events.length<this.props.events.length) 

        {
          events.push(this.props.events[c]);
        }
        
        
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
