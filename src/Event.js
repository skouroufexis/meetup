import React, { Component } from 'react';

// MOCK DATA
let local_time='19:00';
let local_date='2020-08-26';
    let time=local_time+'-'+local_date;
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



class Event extends Component{
    
    state = {
        open:false,        
        content:[]

      }

      

    toggleDetails=()=>{
        
        if(this.state.open==false)
        {
            this.setState({open:true},this.updateContent);
            
        }
        else
        {
            this.setState({open:false},this.updateContent);
            
        }
        
    }  

    render(){
        
        if(this.state.content)
        {
            return(
                <div>
                    <div className='div_eventContent'>
    
                        {this.state.content.map(
                            function(c)
                            {
                                return(<p key={c}>{c}</p>)    

                            }
                            
                        )}                    
                    </div>
                    
                    <div className='div_toggleDetails'>
                        <button onClick={this.toggleDetails}  >Details </button>
                    </div>
                </div>
            )
        }
        else
        {
            return('loading')
        }
        

    }

    componentDidMount(){

            this.setState({content:[time,name,groupName,yes_rsvp_count]});
        
    }


    updateContent=()=>{
        if(this.state.open==false)
        {
            this.setState({content:[time,name,groupName,yes_rsvp_count]})
        }
        else
        {
            this.setState({content:[time,name,groupName,yes_rsvp_count,
                address_1,description,visibility,link]});
        }
    }

    
}


export default Event;