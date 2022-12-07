import React from 'react'
import './chart.scss'
// copy paste 
import { AreaChart,Area, XAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

//copy paste
const data = [
  {name:"Jan",Total:1200},
  {name:"Feb",Total:2100},
  {name:"Mar",Total:800},
  {name:"Jun",Total:1600},
  {name:"Jul",Total:900}
  
]



const Chart = () => {
  return (
    <div className="chart">
      {/* npm add recharts */}
      {/* got to google write recharts.org then example  */}
    <div id="title">Last 6 months(Revenue)</div>
      <ResponsiveContainer width="100%" height="90%">
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke="gray" />
  
  <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Chart