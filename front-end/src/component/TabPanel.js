import { FixedSizeList } from 'react-window';
import Button from '@material-ui/core/Button';
import './TabPanel.css'
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';


const styles = {
  eachState: {
      width: "fit-contents", color: "white", padding: "10%", color: "red", 
      border: "1px solid gray "
  },  
  container: {
    backgroundColor: "#181A28", color: "black",fontWeight: "400",  fontFamily:"Avenir Next W01 , Avenir Nex", fontSize:"20px"

  }
}
export default function TabPanel ( props)  {
const countries  = props.states
// Object.keys(countries).forEach ((function(key) {
//   console.log (key)
// }))
// const Row = ({ index, style }) => (
//   // console.log (index)
//   <div className="eachState" >
//        {states[index].state}
//   </div>
// );

  return (
  <div className="tabPanelContainer">
     
      <nav>
      <div className="headerStates" >
          Confirmed Cases <br/> by 
          State
            </div>
        <ul>
      {
       countries.map ((index) =>{
            return ( <div className="eachState">
            < span >{index.positive.toLocaleString()}  </span> {index.state}
              </div>
            
          )})
       } 
        
      </ul>
      </nav>
  </div>
  )
}



