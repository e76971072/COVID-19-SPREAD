import React, { useState, useEffect, useCallback } from 'react';

import logo from './logo.svg';
import './App.css';
import ImagineCard from './component/ImagineCard'
import TopBar from './component/TopBar'
import SimpleMap from './component/SimpleMap'
import Map from './component/Map'
import ReactTooltip from "react-tooltip";
import TabPanel from './component/TabPanel'
import { keys } from '@material-ui/core/styles/createBreakpoints';
import SvgComponent from './component/SvgComponent'
import EnchanceTable from './component/EnhancedTable';
import Table from './component/Table'
<<<<<<< HEAD
import axios from 'axios';

=======
>>>>>>> 4af29e51927e86efd64ecfd0a6d32bf48b6acdaf
function App() {
    const [ stateObject, setObj] = useState ({ STATE:'', CASES: 0 , DEATH: 0, RECOVERED: 0  }) 
    const [states, setStates]  = useState ([])
    const [content, setContent] = useState("");


    
    useEffect(() => {
      // Update the document title using the browser API

      fetAPI(); 
     
    },[]);
    const fetAPI  = () => {

       const countTotal = (array) =>  {
        setStates (array)
        let cases = 0
        let death = 0 
        let recovered = 0 
        array.map ((index) => {
          cases = cases + index.positive
          recovered = recovered+  index.recovered
          death  = death +  index.death
        })
        setObj({
          STATE: keys, 
          DATE: new Date (),
          CASES: cases, DEATH: death, RECOVERED: recovered
        })
       
      }

      setStates ([])
      
      fetch('https://api.covidtracking.com/v1/states/current.json')
      .then(res => res.json())
      .then ((result)  =>  {
          // setStates (result.data) // Adding objects into a list 
          console.log (result)
          countTotal (result)

      })
      .catch(err => {
        console.log ("Something wrong")
      });
  }; 

  
  return (
    <div className="App">
          <TopBar state= {stateObject}/>
           <div className="states" >
           <Table />
           {/* <EnchanceTable /> */}
           <TabPanel  states= {states}/>
            <Map setTooltipContent={setContent} />
              <ReactTooltip>{content}</ReactTooltip> 
            </div>
    </div>
  );
}

export default App;
