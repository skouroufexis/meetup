import React , { Component} from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

import NumberOfEvents from './NumberOfEvents';
import { render } from 'enzyme';
import { getEvents } from './api';

import {OfflineAlert} from './Alert';




class App extends Component {

  state = {events:[],
           eventsNumber:32,
           infoText:''
          }

  render(){
    
    
    return (
      <div className="App">
          <OfflineAlert text={this.state.infoText} />
         <CitySearch  updateEvents={this.updateEvents} />
         <NumberOfEvents updateEventsNumber={this.updateEventsNumber}  />
         <EventList events={this.state.events} eventsNumber={this.state.eventsNumber} />
         
      </div>
    )
  }


  componentDidMount(){
    if(!navigator.onLine)
          {
            
            this.setState({infoText:'No internet connection! You are now viewing an cached version of the meetup application'});
          }
  }
  
  updateEvents = (lat, lon) => {
    
    getEvents(lat, lon).then(events => this.setState({ events:events }));
  }


  updateEventsNumber =(n)=>{
    this.setState({eventsNumber:n});
  }

}

export default App;
