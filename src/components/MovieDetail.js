import React, { Component } from 'react';


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
                            <div> {m.title}</div>
                            <div> {m.year}</div>
                            <div> <img src={m.img} /></div>
                            <div> {m.descrShort}</div>
                        </div>
                    )
                })}

            </div>
        );
    }
}

export default MovieDetail;