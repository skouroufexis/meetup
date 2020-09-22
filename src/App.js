import React , { Component} from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

import NumberOfEvents from './NumberOfEvents';
import { render } from 'enzyme';
import { getEvents } from './api';

import {OfflineAlert} from './Alert';

import {ResponsiveContainer,ScatterChart,CartesianGrid,XAxis,YAxis,Tooltip,Scatter } from 'recharts';

import moment from 'moment';




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

        <ResponsiveContainer height={400}>
          <ScatterChart
            
            
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>


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


  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = []; // Create empty array for the next 7 days
    const currentDate = moment(); // Today
    // Loop 7 times for next 7 days
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days'); // Add 1 day to current date, currentDate changes
      const dateString = currentDate.format('YYYY-MM-DD'); // Format the date
      // Use the countEventsOnADate function to count #events on this date
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
  }

}

export default App;
