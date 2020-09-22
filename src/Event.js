import React, { Component } from 'react';
import {ChartPie} from './chart';

class Event extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            open:false,
            event:[this.props.event],        
            content:[],
            pieChartData:[]
          }
    }
    render(){

        
        
        if(this.state.content)
        
        {
            
            return(
                <div className='container event'>
                    
                    
                    <div className='div_eventContent container'>
                        {this.state.content.map(
                            function(c)
                            {
                                return(<div className='row event_row' key={c+ '1'}><div className='col-12 extra'>{c}</div></div>)    
                            }
                        )}       
                    {/* <div className='col-12'>
                    <ChartPie className='chart' data={[{name:'max attendance',value:this.state.pieChartData[0]},{name:'going',value:this.state.pieChartData[1]}]} />             
                    </div> */}
                    
                    </div>
                    
                    <div className='d-flex flex-row-reverse div_toggleDetails'>
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

        if(this.props.event)
        {
            let event= this.props.event;

            let eventTime = event.local_date +' at '+ event.local_time;
                
            let eventName=event.name;
                
            let groupName= 'Group: '+ event.group.name;

            let rsvpLimit=event.rsvp_limit;

            
                
            let rsvp=event.yes_rsvp_count;

            let PChart='';
               
            //add Pie Chart data only if rsvp_limit is present
            if(rsvpLimit)
                {
                    this.setState({pieChartData:[rsvpLimit,rsvp]},function(){
                        PChart =<div className='row'> <ChartPie className='chart' data={[{name:'max attendance',value:this.state.pieChartData[0]},{name:'going',value:this.state.pieChartData[1]}]} /></div>
                        this.setState({content:[eventTime,eventName,groupName,PChart]});
                    })

                }    
             else
                {
                    this.setState({content:[eventTime,eventName,groupName]});
                }   
            
            
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
        
        let rsvpLimit=event.rsvp_limit;

        let rsvp=event.yes_rsvp_count;
           
        let PChart='';
            
    
        console.log(event);
        let description=<div>{event.description}</div>
            
            
            
        let visibility=event.visibility;
        let link = <a href={event.link}>{event.link} </a>;  

        

        if(this.state.open==false)
        {

            //add Pie Chart data only if rsvp_limit is present
            if(rsvpLimit)
            {
                this.setState({pieChartData:[rsvpLimit,rsvp]},function(){
                    PChart =<div className='row'> <ChartPie className='chart' data={[{name:'max attendance',value:this.state.pieChartData[0]},{name:'going',value:this.state.pieChartData[1]}]} /></div>
                    this.setState({content:[eventTime,eventName,groupName,PChart]});
                })

            }    
            else
            {
                this.setState({content:[eventTime,eventName,groupName]});
            }    
            
        }
        else
        {

                //add Pie Chart data only if rsvp_limit is present
            if(rsvpLimit)
            {
                this.setState({pieChartData:[rsvpLimit,rsvp]},function(){
                    PChart =<div className='row'> <ChartPie className='chart' data={[{name:'max attendance',value:this.state.pieChartData[0]},{name:'going',value:this.state.pieChartData[1]}]} /></div>
                    this.setState({content:[eventTime,eventName,groupName,description,visibility,link,PChart]});
                })

            }    
            else
            {
                this.setState({content:[eventTime,eventName,groupName,description,visibility,link]});
            }    

            
        }
    }

    
}


export default Event;