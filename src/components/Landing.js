import React, { Component } from 'react';
import {Link}  from 'react-router-dom'

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                {name: "Gili", background: "red"},
                {name: "Yotam", background: "green"},
                {name: "Ido", background: "yellow"},
                {name: "Shay", background: "orange"}
            ]
        };
      }
    render() {
        return (
            <div id="Landing">
             <div> Whos watcing? </div>
              {this.state.users.map(u =><Link to="/catalog" key={u.name}> <div key={u.name} className={`${u.background} user`} > {u.name} </div></Link>)}       
            </div>
        );
    }
}

export default Landing;