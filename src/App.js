import React , { Component} from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

import NumberOfEvents from './NumberOfEvents';
import { render } from 'enzyme';
import { getEvents } from './api';

class App extends Component {

  state = {events:[]}

  render(){

    return (
      <div className="App">
         <CitySearch  updateEvents={this.updateEvents} />
         <NumberOfEvents />
         <EventList events={this.state.events} />
         {/* <Event /> */}
      </div>
    )
  }
  
  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events:events }));
  }
}

export default App;
