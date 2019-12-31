import React, { Component } from 'react';
import '../styles/catalog.css'
import Movie from './Movie'

class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            search: "",

        }
        this.searchMovie = this.searchMovie.bind(this);
    }

    searchMovie = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div id="Catalog">
                
                <div  className="budget">Your budget: {this.props.budget}$</div>
                <div className="search"><input name="search" className="input" value={this.state.search} onChange={this.searchMovie} type="text" placeholder="  Search for a Movie" /></div>
                
                <div className="rent-container">
                
                    {this.props.movies.filter(m => m.isRented).map(m =>
                        <div key={m.id} className="rented-movie">
                            <Movie src={m.img} className="removeFromRent" isRented={this.props.movies[m.id].isRented} returnMovie={this.props.returnMovie} id={m.id} movie={m} />

                        </div>)}
                </div>
                <h4 className="title">Movies ></h4>
                <div className="addToRent">
                
                    {this.props.movies.filter(m => (m.title).toLowerCase().includes(this.state.search.toLowerCase())).map(m =>
                        <Movie key={m.id} src={m.img} className="" rentMovie={this.props.rentMovie} id={m.id} movie={m} />
                    )}
                </div>
            </div>
        );
    }
}

export default Catalog;