import React , { Component } from 'react';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import NumberOfEvents from './NumberOfEvents';

function App() {
  return (
    <div className="App">
       <CitySearch />
       <NumberOfEvents />
       <EventList />
       <Event />
    </div>
  );
}

export default App;
