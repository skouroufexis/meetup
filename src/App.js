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
            console.log('show message offline');
            this.setState({infoText:'No internet connection! You are now viewing a cached version of the meetup application'});
          }
    else
          {
            console.log('user is online');
            this.setState({infoText:''});
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
