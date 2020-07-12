import React,{Component} from 'react';

import './App.css';

import 'bulma/css/bulma.css'

import {Switch, Route} from 'react-router-dom'

import {Detalle } from './paginas/detalle'; 


import {Home} from './paginas/home'

import {NoEncontrado} from './paginas/noEncontrado'

class App extends Component{
  
  render(){
  
    /*
      const url = new URL(document.location);
    const Page= url.searchParams.has('id') 
    ?
    <Detalle 
     id ={url.searchParams.get('id')}
     />
     :
     <Home></Home>*/


     return(
      <div className="App">
   
      <Switch>
      <Route exact path ='/' component={Home} /> 
      <Route exact path ='/detalle/:movieId' component={Detalle} />    
      <Route component={NoEncontrado} />
      </Switch>
   
  
 </div>);
    
  }
}
export default App;
