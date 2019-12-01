import React, { Component } from 'react';
import '../styles/Movie.css'
import { Link } from 'react-router-dom'

class Movie extends Component {

    rentMovie = (e) => {
        this.props.rentMovie(e)
    }

    returnMovie = (e) => {
        this.props.returnMovie(e)
    }

    render() {
  
        
        return (

            <div className="Movie">
                   
                        <Link to={`movies/${this.props.movie.id}`}> <img src={this.props.src} /></Link>
                        <button className="add" onClick={this.props.isRented ? this.returnMovie : this.rentMovie} id={this.props.id}> {this.props.isRented ? "-" : "+"} </button>
              
            </div>

        );
    }
}

export default Movie;