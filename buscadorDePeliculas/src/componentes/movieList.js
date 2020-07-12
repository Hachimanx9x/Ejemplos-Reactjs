import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import {Movie} from './movie'; 

export class MovieList extends Component{
    static propTypes ={
        movies : PropTypes.array
    }
    render(){
        const {movies}= this.props;
        return(
            <div className="MovieList">
                
                {
                     // eslint-disable-next-line array-callback-return
                     movies.map(movie =>{
                        return(
                        // eslint-disable-next-line no-unused-expressions
                        <div  key={movie.imdbID} className="MovieList-items">
                        <Movie  
                        id={movie.imdbID}                      
                        title={movie.Title}
                        year={movie.Year}
                        poster={movie.Poster}
                        ></Movie>
                         </div>
                        )
                    }
                    )
                }
                
            </div>
        );
      
    }
}
