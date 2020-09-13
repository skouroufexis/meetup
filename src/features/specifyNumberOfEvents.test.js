import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount,shallow } from 'enzyme';
import App from '../App';
import { mockEvents } from '../mock-events';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number 20 is the default number of visible events', ({ given, when, then }) => {
    let AppWrapper;
    given('The user has selected a city and hasn’t specified a number of visible events', () => {
    AppWrapper = mount(<App />);
    });
    when('The user has selected a city', () => {
    AppWrapper.update();    
    });

    then('The default number of visible events is set to 20', () => {
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    AppWrapper = mount(<App />);
    given('The user decides to change the number of visible events', () => {
        AppWrapper.update();  
    });

    when('The user changes the number of visible events', () => {
        //change number of events to non-numeric-->show default number of events (here set to 20)
        AppWrapper.find('#input_numberOfEvents').simulate('change', { target: { value: 5 } });
        AppWrapper.update();    
    });

    then('More/less events are visible to the user', () => {
        expect(AppWrapper.find('.Event')).toHaveLength(5);
    });
  });  
});