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

        
        
        if(this.state.content)
        
        {
            
            return(
                <div>
                    <div className='div_eventContent'>
                        {this.state.content.map(
                            function(c)
                            {
                                return(<p key={c+ '1'}>{c}</p>)    

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
        
        
        if(this.props.event)
        {
            
            let event= this.props.event;
            
            let eventTime = event.local_time +'-'+ event.local_date;
            let eventName=event.name;
            let groupName='GROUP: '+event.name;
            let rsvp=event.yes_rsvp_count +' people are going';        
            let description=event.description;
            let visibility=event.visibility;
            let link = event.link;   
            this.setState({content:[eventTime,eventName,groupName,rsvp]});
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

       let content=this.props.event;
        
        let eventTime = content.local_time +' - '+ content.local_date;
        let eventName=content.name;
        let groupName='GROUP: ' + content.group.name;
        let rsvp=content.yes_rsvp_count +' people are going';        
        let description=content.description;
        let visibility=content.visibility;
        let link = content.link;   

        

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