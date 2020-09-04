import React , { Component} from 'react';

import './App.css';



import EventList from './EventList';
import CitySearch from './CitySearch';

import NumberOfEvents from './NumberOfEvents';
import { render } from 'enzyme';
import { getEvents } from './api';

class App extends Component {

  state = {events:[],
           eventsNumber:32
          }

  render(){

    return (
      <div className="App">
        
         <CitySearch  updateEvents={this.updateEvents} />
         <NumberOfEvents updateEventsNumber={this.updateEventsNumber}  />
         <EventList events={this.state.events} eventsNumber={this.state.eventsNumber} />
         
      </div>
    )
  }
  
  updateEvents = (lat, lon) => {
    
    getEvents(lat, lon).then(events => this.setState({ events:events }));
  }


  updateEventsNumber =(n)=>{
    this.setState({eventsNumber:n});
    

  }
}

export default App;
