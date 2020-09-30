import React , { Component} from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

import NumberOfEvents from './NumberOfEvents';
import {Modal} from  './modal';

import { render } from 'enzyme';
import { getEvents } from './api';

import {OfflineAlert} from './Alert';

import {ResponsiveContainer,ScatterChart,CartesianGrid,XAxis,YAxis,Tooltip,Scatter } from 'recharts';

import moment from 'moment';




class App extends Component {

  state = {events:[],
           eventsNumber:32,
           modalContent:[],
           infoText:''
          }

  render(){
    
    
    return (
      <div className="App">
          <header>
          <div className='container' id='app_header'>
            <div className='row'> <h1 className='app_title'>MEETUP APP</h1></div>
          </div>
          <OfflineAlert text={this.state.infoText} />
          
          <div className = 'container' id='top_menu_container'>
            <div className='row'><CitySearch  updateEvents={this.updateEvents} /></div>
            <div className='row'><NumberOfEvents updateEventsNumber={this.updateEventsNumber}  /></div>
          </div>
          </header>

          
         
          <div className='container'>
            <div className='row' id='scatterChart_header'><h5>Number of events per day</h5></div>
          </div>  
       <div className='container' id='scatter_chart_container'>

          <ResponsiveContainer  height={400}>
          <ScatterChart >
            <CartesianGrid  stroke='rgba(256,256,256,0.8)' fill='rgba(0,139,139,0.1)' />
            <XAxis stroke='darkcyan' type="category" dataKey="date" name="date"/>
            <YAxis width={20} stroke='darkcyan' type="number" dataKey="number" name="number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter  data={this.getData()} fill="rgba(0,0,0,0.7)" />
          </ScatterChart>
        </ResponsiveContainer>
       </div>
  
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
