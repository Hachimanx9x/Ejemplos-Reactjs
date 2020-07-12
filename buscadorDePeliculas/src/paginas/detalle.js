import React,{Component} from 'react'; 
import PropTypes from 'prop-types'; 
import {BotonVolver} from '../componentes/buttonVolver'
const API_KEY = '4efe550f';

export class Detalle extends Component{
    static propTypes={
        match: PropTypes.shape({ 
            params : PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    state ={movie:{}}
    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
       .then(res => res.json())
       .then(movie =>{
         console.log({movie})
         this.setState({movie})
       })
    }

    componentWillMount(){
        const{movieId}= this.props.match.params;
        this._fetchMovie({id:movieId})
    }
    render(){
        const {title, Poster, Actor, Metascore, Plot}= this.state.movie; 
        return(
           <div>
               <BotonVolver/>
               <h1>{title}</h1>
               <img src = {Poster}/>
               <h3>{Actor}</h3>
                <span>{ Metascore}</span>
                <p>{Plot}</p>
           </div>
        );
    }
}