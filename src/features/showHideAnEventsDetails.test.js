import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount,shallow } from 'enzyme';
import App from '../App';

let feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
let AppWrapper;

defineFeature (feature,test=>{

    test('An event element is collapsed by default', ({ given, when, then }) => {

        given('The user has selected a city', () => {
            AppWrapper = mount(<App />);
        });
         
        
        when('The results for the city are loaded and displayed', () => { 
            AppWrapper.update();
        });
    
        then('The event elements associated with the selected city will be collapsed by default', () => {
            
            let firstEvent = AppWrapper.find('.Event').at(0);
            
            //collapsed events show 4 fields of information
            expect(firstEvent.find('.extra')).toHaveLength(4);

        });
      });


    test('User can expand an event to see its details', ({ given, when, then }) => {

        given('The events for the selected city are displayed', () => {
            AppWrapper = mount(<App />);
        });
            
        
        when('The user clicks on an event’s “show details” button', () => { 
            AppWrapper.update();
            AppWrapper.find('.Event button').at(0).simulate('click');            
        });

        then('The user should see the details of the selected event', () => {
            AppWrapper.update();
            let firstEvent = AppWrapper.find('.Event').at(0);
           //expanded events show 7 fields of information
           expect(firstEvent.find('.extra')).toHaveLength(7);
        });
    });


    test('User can collapse an event to hide its details', ({ given, when, then }) => {

        given('The event details of the selected event are being displayed', () => {
            AppWrapper = mount(<App />);
        });
            
        
        when('The user clicks on an event’s “hide details” button', () => { 
            AppWrapper.update();

            //expand
            AppWrapper.find('.Event button').at(0).simulate('click');   
            AppWrapper.update();

            //collapse
            AppWrapper.find('.Event button').at(0).simulate('click');   
        });

        then('The events details should be hidden', () => {
            AppWrapper.update();
            let firstEvent = AppWrapper.find('.Event').at(0);
           //expanded events show 4 fields of information
           expect(firstEvent.find('.extra')).toHaveLength(4);
        });
    });

})