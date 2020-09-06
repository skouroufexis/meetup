import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';

let EventWrapper;

// // MOCK DATA
let event={local_time:'19:00',local_date:'2020-08-26',name:'Networking and Idea Sharing  - Aperitivo con Bologna Startup',
           group:{name:'Bologna Startup'},yes_rsvp_count:'6',
           visibility:'public',
           link:'https://www.meetup.com/Bologna-Start-Up/events/fpctnlybclbjc/'
            }

let eventTime='2020-08-26 at 19:00';
let eventName = 'Networking and Idea Sharing  - Aperitivo con Bologna Startup';
let group={name:'Bologna Startup'};
let groupName='Group: '+ group.name;

let rsvp='6';
    rsvp=rsvp+ ' persons are going';
let description='Mock description for event';
let visibility= 'public';
let link='https://www.meetup.com/Bologna-Start-Up/events/fpctnlybclbjc/';
    link= 'Event Link: '+link;


describe ('<Event /> component',()=>{ 

    beforeAll(() => {
        EventWrapper = shallow(<Event />);
        EventWrapper.setState({event:[eventTime,eventName,groupName,rsvp,description,visibility,link]});
        
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
        EventWrapper.setState({content:[eventTime,eventName,groupName,rsvp]})    
        expect(EventWrapper.state('content')).toEqual([eventTime,eventName,groupName,rsvp]);

      });

    
    

      test('collapse Event component',()=>{

        EventWrapper = shallow(<Event event={event} />);

        //event is expanded
        EventWrapper.setState({open:true});
        //user clicks on 'hide details' button
        EventWrapper.find('.div_toggleDetails button').simulate('click');

        console.log (EventWrapper.instance().props);

        //limited information will be shown if event is collapsed        
        expect(EventWrapper.state('content')).toEqual([eventTime,eventName,groupName,rsvp]);
      });



})