import React, { Component } from 'react';
import '../styles/movieDetail.css'

class MovieDetail extends Component {


    render() {
        const movie = this.props.match.params.movieId
        const movies = this.props.state
        console.log(movies)
        console.log(movie)
        return (
            <div id="MovieDetail">
                {movies.filter(m => m.id == movie).map(m => {
                    return (
                        <div key={m.id} className="details">
                            <div> <h2>{m.title} ({m.year})</h2></div>
                            
                            
                            <div className="trailer">
                            <iframe width="420" height="315"
                                src={`https://www.youtube.com/embed/${m.trailer}?controls=0`}>
                            </iframe>
                            
                            </div>
                            <div className="description"> {m.descrShort}</div>
                        </div>
                    )
                })}

            </div>
        );
    }
}

export default MovieDetail;