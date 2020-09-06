import React from 'react';
import { shallow, mount} from 'enzyme';
import App from '../App';

import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import {mockEvents} from '../mock-events';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });


  test('check if NumberOfEvents component is rendered', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App /> integration', () => {
  
  test('get list of events after user selects a city', async () => {
    const AppWrapper = mount(<App />);

    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();

    const CitySearchWrapper = AppWrapper.find(CitySearch);

    CitySearchWrapper.instance().handleItemClicked('value',1.1, 1.2);

    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
    AppWrapper.unmount();
  });

  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents(1.1, 1.2);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  });


  test('render correct list of events', () => {
    const AppWrapper = mount(<App/>);
    // const NumberOfEventsWrapper= mount(<NumberOfEvents updateEventsNumber={this.updateEventsNumber}  />);
    // const EventListWrapper = mount(<EventList events={this.state.events} eventsNumber={this.state.eventsNumber} />);

    AppWrapper.setState({ events: [{ id: 1,group:{name:1} }, { id: 2,group:{name:2} }, { id: 3,group:{name:3} }, { id: 4,group:{name:4} }] });
    expect(AppWrapper.find('.Event')).toHaveLength(4);
  });


  test('render correct number of events', () => {
    const AppWrapper = mount(<App/>);

    //initial number of events set to 4
    AppWrapper.setState({ events: mockEvents.events}//20 events
        );
    // AppWrapper.setState({ events: [{ id: 1,group:{name:1} }, { id: 2,group:{name:2} }, { id: 3,group:{name:3} }, { id: 4,group:{name:4} }] }
    //     );
    
    

    //display the default number of events (here set to 20)    
    expect(AppWrapper.find('.Event')).toHaveLength(20);

    //change number of events to 2-->show 2 events 
    AppWrapper.find('#input_numberOfEvents').simulate('change', { target: { value: '2' } });
    expect(AppWrapper.find('.Event')).toHaveLength(2);
    
    //change number of events to non-numeric-->show default number of events (here set to 20)
    AppWrapper.find('#input_numberOfEvents').simulate('change', { target: { value: 'a' } });
    expect(AppWrapper.find('.Event')).toHaveLength(20);    

    //change number of events to blank-->show default number of events (here set to 20)
    AppWrapper.find('#input_numberOfEvents').simulate('change', { target: { value: '' } });
    expect(AppWrapper.find('.Event')).toHaveLength(20);   



  });
});
