import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';


const GRAPH = () => {
    const data = [
        {name: "HTML", proficiency: 90},
        {name: "CSS", proficiency: 85},
        {name: "REACT", proficiency: 50},
        {name: "JS", proficiency: 75},
        {name: "PY", proficiency: 60},
        {name: "MYSQL", proficiency: 70},
        {name: "PHP", proficiency: 65},
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
          );
        }
      
        return null;
      };
    return ( 
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
        
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <CartesianGrid stroke="#ffffff" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#ffffff"  />
          <Tooltip
            labelStyle={{ color: '#272D3D' }} 
            itemStyle={{ color: '#272D3D' }} 
    />
          <Bar dataKey="proficiency" stackId="a" fill="#939AAE" activeBar={<Rectangle fill="#272D3D" stroke="blue" />}  />
        
        </BarChart>
      </ResponsiveContainer>
     );
}
 
export default GRAPH;