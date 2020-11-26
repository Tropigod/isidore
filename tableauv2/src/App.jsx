import React from 'react';
import './App.css';
import Table from './Table.jsx';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tableData:[
        {"_numeroLigne":0,"_nomImage":null,"_idRLI":"-1","_idPorte":"564943d6-544d-4571-816f-4c543e9588ed-0010b5c4","_locNiveau":"RDC","_materiauSupport":"A-Beton","_epSupport":"18","_largeurPorte":"1000","_hauteurPorte":"2160","_epaisseurPorte":"0","_poussant":"DP"}
,{"_numeroLigne":1,"_nomImage":null,"_idRLI":"-1","_idPorte":"564943d6-544d-4571-816f-4c543e9588ed-0010b5d2","_locNiveau":"RDC","_materiauSupport":"A-Platre","_epSupport":"5","_largeurPorte":"900","_hauteurPorte":"2090","_epaisseurPorte":"0","_poussant":"GP"}
      ],
      mofificateur: ''
    }
  }
  
  
  render() {
      
      
      return (
        <div >
          
          <br/> Tableau porte
          <Table data={this.state.tableData}/>
          
          <br/>
         
        </div>
        
      );
  }
  
 
}

export default App;
