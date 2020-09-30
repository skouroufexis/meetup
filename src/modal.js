import React , { Component} from 'react';

class Modal extends Component{

    constructor(props){
        super(props);
        this.state={content:'',toggle:''}

    }
render(){
    
    console.log(this.state.content);
    let content=this.state.content;
    
    
    if(content!='')
    {
        return(
            <div>
                <div className='row d-flex flex-row-reverse closeButton_container'>
                    
                        <button className='ml-auto' onClick={this.toggle} >close</button>
                    
                </div>
                <div className='div_eventContent container'>
                    
                    {content.map(
                                function(c)
                                {

                                    return(
                                        <div className='row event_row' key={c+ '1'}>
                                            <div className='col-12 extra'>{c}</div>
                                        </div>)    
                                }
                            )}       
              
                </div>
            </div>
            )
    }
    
    else
    {
        return('a');
    }
    
    
    
    
}


//update the state with the new props
static getDerivedStateFromProps(props, state){
    let content=props.content;
    if (content.length>0)
    {
        return{content:props.content,toggle:props.toggle};
    }
}


toggle=()=>{
    let toggleModal=this.state.toggle;
    toggleModal();
}

// UNSAFE_componentWillReceiveProps(nextProps){
//     this.setState({content:nextProps.content});
// }






}



export {Modal};