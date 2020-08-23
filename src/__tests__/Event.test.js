import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';

let EventWrapper;

// MOCK DATA
let local_time='19:00';
let local_date='2020-08-26';
let time=local_time +'-'+local_date;

let name = 'Networking and Idea Sharing  - Aperitivo con Bologna Startup';

let group={name:'Bologna Startup'};
let groupName='GROUP: '+ group.name;

let yes_rsvp_count='6';
    yes_rsvp_count=yes_rsvp_count+ ' people are going';

let address_1='Via Europa';

let description='Mock description for event';

let visibility= 'public';
let link='https://www.meetup.com/Bologna-Start-Up/events/fpctnlybclbjc/';
    link= 'Event Link: '+link;


describe ('<Event /> component',()=>{

    beforeAll(() => {
        EventWrapper = shallow(<Event />);
        
      });  


    
      test('check if all the elements are rendered',()=>{
        //content wrapper     
        expect(EventWrapper.find('.div_eventContent')).toHaveLength(1);

        //button wrapper
        expect(EventWrapper.find('.div_toggleDetails')).toHaveLength(1);

        //button
        expect(EventWrapper.find('.div_toggleDetails button')).toHaveLength(1);


      });

    
      test('check if the event is collapsed',()=>{
        //limited information will be shown if event is collapsed        
        expect(EventWrapper.state('content')).toEqual([time,name,groupName,yes_rsvp_count]);

      });

    
      test('show detailed information for the event',()=>{
        //event is collapsed
        EventWrapper.setState({open:false});
        //user clicks on 'show details' button
        EventWrapper.find('.div_toggleDetails button').simulate('click');
        expect(EventWrapper.state('content')).toEqual([time,name,groupName,yes_rsvp_count,
              address_1,description,visibility,link]);
      });

      test('collapse Event component',()=>{

        //event is expanded
        EventWrapper.setState({open:true});
        //user clicks on 'hide details' button
        EventWrapper.find('.div_toggleDetails button').simulate('click');
        //limited information will be shown if event is collapsed        
        expect(EventWrapper.state('content')).toEqual([time,name,groupName,yes_rsvp_count]);
      });



})