import React, { Component } from 'react';
import {ChartPie} from './chart';
import {Modal} from './modal';


class Event extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            open:false,
            event:[this.props.event],        
            content:[],
            modalContent:[],
            pieChartData:[]
            
          }
    }
    render(){
        
        if(this.state.content)
        
        {
            
            return(

                <div className='container event'>
                    
                    <div className='modalContainer' onScroll={this.membrane}>    
                        <Modal content={this.state.modalContent} toggle={this.toggleDetails}/>
                    </div>
                    <div className='div_eventContent mini_info container'>
                        {this.state.content.map(
                            function(c)
                            {
                                
                                return(
                                    <div className='row event_row' key={c+ '1'}>
                                        <div className='col-12 extra'>{c}</div>
                                    </div>)    
                            }
                        )}       
                    </div>
                    
                    <div className='d-flex flex-row-reverse div_toggleDetails'>
                        <button className='mini_info'  onClick={this.toggleDetails}>Details </button>
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

            let PChart='';
               
            this.setState({content:[eventTime,eventName,groupName,PChart]});
            
            
        }

    }

    toggleDetails =()=>{
        
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


        let id= this.props.id; //the index of each event element created
        
        let event= this.props.event;

        let eventTime = event.local_date +' at '+ event.local_time;
            
        let eventName=event.name;
            
        let groupName= 'Group: '+ event.group.name;
        
        let rsvpLimit=event.rsvp_limit;

        let rsvp=event.yes_rsvp_count;
           
        let PChart='';


        let description=<div dangerouslySetInnerHTML={{__html:event.description}}></div>

        let visibility=event.visibility +' event';
        let link = <a href={event.link}>{event.link} </a>;  
        
        let modalContainer=document.getElementsByClassName('modalContainer');
        
        let miniInfo = document.querySelectorAll(".mini_info");
        

        if(this.state.open==false) // close modal
        {
           
            // closing modal
            modalContainer[id].style.opacity='0';
            modalContainer[id].style.transform='TranslateY(40px)';  
            
            setTimeout(function(){
                                  modalContainer[id].style.display='none';  
                                  
                                 },300)
            
           
            // emptying the modal content
            this.setState({modalContent:[]});
            this.setState({content:[eventTime,eventName,groupName]});


             //show collapsed information
            let l=miniInfo.length;
            var count;

            for(count=0;count<l;count++){
                miniInfo[count].style.opacity='1';
                miniInfo[count].disabled=false;
            }     
            
            //enable scrollbars
            document.body.style.overflow='scroll';


        }
        else // open modal
        {

            modalContainer[id].style.display='flex';
           
            //fade collapsed information
            let l=miniInfo.length;
            var count;

            for(count=0;count<l;count++){
                miniInfo[count].style.opacity='0.05';
                miniInfo[count].disabled=true;

                // border-bottom:  solid  rgb(145, 216, 214,1) 1px;
            }

            //disable scrollbars
            document.body.style.overflow='hidden';

            setTimeout(function(){modalContainer[id].style.opacity='1';
                                  modalContainer[id].style.transform='TranslateY(0px)';  
                                 },0)
            //add Pie Chart data only if rsvp_limit is present
            if(rsvpLimit)
            {
                this.setState({pieChartData:[rsvpLimit,rsvp]},function(){
                    
                    PChart =<div className='row'> <ChartPie className='chart' data={[{name:'max attendance',value:this.state.pieChartData[0]},{name:'going',value:this.state.pieChartData[1]}]} /></div>
                    
                    this.setState({modalContent:[eventTime,eventName,groupName,description,visibility,link,PChart]});
                    this.setState({content:[]});
                })

            }    
            else
            {
                PChart='';
                this.setState({modalContent:[eventTime,eventName,groupName,description,visibility,link,PChart]});
                this.setState({content:[]});
            }

            this.setState({modalContent:[eventTime,eventName,groupName,description,visibility,link,PChart]});
            this.setState({content:[]});
           
        }
    }

    //function to add/remove the shadow of the modal upon scrolling
    membrane=()=>{
        let id = this.props.id; //the index of each event element created
        let modalContainer=document.getElementsByClassName('modalContainer');
        

           
            modalContainer[id].style.boxShadow='0px -35px 0px rgba(0,0,0,0.1) inset';

        
        
        
    }

}
export default Event;