import React,{Component} from 'react'; 
import {Title} from '../componentes/titulos'; 
import {Buscador_formulario} from '../componentes/busFormulario'; 
import {MovieList} from '../componentes/movieList';

export class Home extends Component{

    state ={usedSearch : false, resultado:[]}
  
  _handleResults=(resultado)=>{
    this.setState({resultado, usedSearch: true})
  }

  _renderResults(){
    // eslint-disable-next-line no-unused-expressions
   return( this.state.resultado.length===0
    ? <p>Sin resultados 😞  </p>
    : <MovieList movies = {this.state.resultado}></MovieList>)
  }
    render(){
        return(
       <div>
                <Title>Buscador de Peliculas</Title>
                <div className="SearchForm-wrapper">
                             
                <Buscador_formulario onResults = {this._handleResults}/>
                </div>
                {this.state.usedSearch ? this._renderResults() : 
                <small> Use el formulario porfavor</small> }
     
       </div>
        );
    }
}