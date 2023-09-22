import React from 'react';
import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ReferenceLine,
    ResponsiveContainer } from 'recharts';
import '../../Assets/Styles/Chart.css';


function MyLineChart(props){
  return (
    <div style={{width:"100%", height:"Calc(100vh/5)" }}>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart 
        data={props.data}
        margin={{ 
          top: 25,
          right: 10,
          left: -30,
          bottom: -10
          }}
          label="Ciao"
      >
      <CartesianGrid opacity={0.1} vertical={false}/>

        <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor='#00FFFF' stopOpacity={1}/>
            <stop offset="95%" stopColor='#0094FF' stopOpacity={0.05}/>
        </linearGradient>
          <linearGradient id="colorsp" x1="0" y1="0" x2="0" y2="1">
{/*             <stop offset="0%" stopColor='#FFF' stopOpacity={1}/>
            <stop offset="95%" stopColor='#0094FF' stopOpacity={0.05} /> */}
          </linearGradient>

        </defs>
        <XAxis 
                dataKey="time"
                tick={{fill: '#ebeefe'}} 
                style={{
                    fontSize: '0.5rem',
                    fontFamily: 'Times New Roman',
                }} />

        <YAxis 
          domain={[0, 200]}
          tick={{fill: '#ebeefe'}} 
          style={{
              fontSize: '0.8rem',
              fontFamily: 'Times New Roman',
          }} />

        <ReferenceLine y={200} label={{ value: 'Glue Pressure', fill: 'white' }} stroke='transparent' />   
       
        <Tooltip 
          content={<BarCustomTooltip />}
          cursor={{fill: 'rgba(96, 96, 96, 0.37)'}}
          dy={10}
        />        
        
        <Area type="monotone" dataKey="pv" stroke="#00FFFF" fillOpacity={1} fill="url(#colorPv)" />
        <Area type="monotone" dataKey="sp" stroke="#FFF" fillOpacity={1} fill="url(#colorsp)" />
      </AreaChart>
  </ResponsiveContainer>
  </div>
  )
}

function BarCustomTooltip({active, payload, label}){
  if (active){
     return <div className='tooltip'>
      <p>{label}</p>
          <p>
              sp: {payload[1].value.toFixed(1)}
          </p>
          <p>
              pv: {payload[0].value.toFixed(1)} 
          </p>
      </div>
  }
}
export default MyLineChart;