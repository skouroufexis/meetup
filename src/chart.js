import React, { PureComponent } from 'react';
import {ResponsiveContainer, PieChart, Pie, Legend, Tooltip,Cell,LabelList} from 'recharts';


// const data = [
//   { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
// ];
// let data=[{name:'shari',value:2},{name:'Giuliano',value:3}];



class ChartPie extends PureComponent {
  

  render() {
    
    
    let data= this.props.data;
    
    let colours =['darkcyan','green'];

  


    if(data)
    {

      console.log(data);
      return (
        
        <ResponsiveContainer height={200}>
       <PieChart>
        
         <Pie label labelLine={false}  isAnimationActive={true} nameKey='name' dataKey='value' cx="50%" cy="50%" data={data} outerRadius={40} innerRadius={5}>
           {
              data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colours[index]}/>
            ))
            }
         </Pie>
         <Tooltip />
         <Legend></Legend> 
       </PieChart>
       
       </ResponsiveContainer> 
      
     );
    }
    else
    {
      return(<div></div>)
    }
    
  }
}

export {ChartPie};





