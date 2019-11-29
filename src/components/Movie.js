import React, { Component } from 'react';
import '../styles/Movie.css'
import { Link } from 'react-router-dom'

class Movie extends Component {

    rentMovie = (e) => {
        this.props.rentMovie(e)
    }

    render() {
  
        
        return (

            <div className="Movie">
                   
                        <Link to={`movies/${this.props.movie.id}`}> <img src={this.props.src} /></Link>
                        <div onClick={this.rentMovie} id={this.props.id}> {this.props.isRented ? "-" : "+"} </div>
              
            </div>

        );
    }
}

export default Movie;