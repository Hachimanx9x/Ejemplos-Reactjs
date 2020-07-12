import React,{Component} from 'react'; 

const API_KEY = '4efe550f';
export class Buscador_formulario extends Component{
    state={inputPelicula:'' }
    _handleChange =(e)=>{
        this.setState({inputPelicula:e.target.value})
    }
    _handleSubmit=(e)=>{
        e.preventDefault(); 
       // alert(this.state.inputPelicula)
       const {inputPelicula} = this.state; 
       fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputPelicula}`)
       .then(res => res.json())
       .then(resultado =>{
           const {Search=[], totalResults=0} = resultado; 
         //  const searchDeafult = Search || [] ;
           console.log({Search, totalResults}); 

           this.props.onResults(Search); 
       })
    }
    render(){
        return(
            <form onSubmit={this._handleSubmit}>
            <div className="field has-addons">
                 <div className="control">
                    <input 
                    className="input"
                    onChange={this._handleChange}
                     type="text" 
                     placeholder="Pelicula a buscar" />
                 </div>
                <div className="control">
                    <button className="button is-info">
                        Buscar
                    </button>
                </div>
            </div>
            </form>
        )
    }
}