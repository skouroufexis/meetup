import React from 'react';
import { shallow,mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

let NumberOfEventsWrapper;

describe('<NumberOfEvents /> component', () => {

  beforeAll(() => {

        let updateEventsNumber=jest.fn();   
         NumberOfEventsWrapper = shallow(<NumberOfEvents updateEventsNumber={updateEventsNumber} />);
  });  

  test('render number of events text input', () => {
    
    expect(NumberOfEventsWrapper.find('#input_numberOfEvents')).toHaveLength(1);
    
  });

  test('Initial value of number of events = 32', () => {
    
    expect(NumberOfEventsWrapper.state('number')).toBe(32);
  });

  test('change state when text input changes', () => {
    
    const eventObject = { target: { value: 10 }};
    NumberOfEventsWrapper.find('#input_numberOfEvents').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('number')).toBe(10);
  });
});

