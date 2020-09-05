import React, { Component } from 'react';





class Event extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            open:false,
            event:[this.props.event],        
            content:[]
          }
    }
    

    render(){

        
        
        if(this.state.content.length!=0)
        
        {
            console.log(this.state.content);
            return(
                <div className='container event'>
                    
                    
                    <div className='div_eventContent container'>
                        {this.state.content.map(
                            function(c)
                            {
                                return(<div className='row event_row' key={c+ '1'}><div className='col-12'>{c}</div></div>)    
                            }
                        )}                    
                    </div>
                    
                    <div className='d-flex flex-row-reverse' id='div_toggleDetails'>
                        <button  onClick={this.toggleDetails}>Details </button>
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
        console.log(this.props.event);
        if(this.props.event)
        {
            let event= this.props.event;

            let eventTime = event.local_date +' at '+ event.local_time;
                
            let eventName=event.name;
                
            let groupName= 'Group: '+ event.group.name;
                
            let rsvp=event.yes_rsvp_count;
                if (rsvp==1)
                {
                    rsvp=rsvp+' person is going';
                }
                else
                {
                    rsvp=rsvp+' persons are going';
                } 
            this.setState({content:[eventTime,eventName,groupName,rsvp]});
            console.log(this.state.content);
        }
        
        
        
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
    
    updateContent=()=>{

        let event= this.props.event;

        let eventTime = event.local_date +' at '+ event.local_time;
            
        let eventName=event.name;
            
        let groupName= 'Group: '+ event.group.name;
            
        let rsvp=event.yes_rsvp_count;
            if (rsvp==1)
            {
                rsvp=rsvp+' person is going';
            }
            else
            {
                rsvp=rsvp+' persons are going';
            }
    
            console.log(event);
        let description=<div>{event.description}</div>
            
            
            
        let visibility=event.visibility;
        let link = <a href={event.link}>{event.link} </a>;  

        

        if(this.state.open==false)
        {
            this.setState({content:[eventTime,eventName,groupName,rsvp]})
        }
        else
        {
            this.setState({content:[eventTime,eventName,groupName,rsvp,description,visibility,link]});
        }
    }

    
}


export default Event;