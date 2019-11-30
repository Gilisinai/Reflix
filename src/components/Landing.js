import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/landing.css'
class Landing extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { name: "Gili", background: "red", img: "https://i.imgur.com/itElfV3.jpg" },
                { name: "Yotam", background: "green", img: "https://www.trickscity.com/wp-content/uploads/2018/02/cute-girl-profile-pics.jpg" },
                { name: "Ido", background: "yellow", img: "https://i.kym-cdn.com/photos/images/original/001/287/960/174.jpg" },
                { name: "Gal", background: "orange", img: "https://ienglishstatus.com/wp-content/uploads/2016/11/Attitude-DP-1.jpg" }
            ]
        };
    }
    render() {
        return (
            <div id="Landing">
                <div><h1> Who's watcing?</h1> </div>
                {this.state.users.map(u => 
                <div key={u.name} className="profile">
                    <Link to="/catalog" >
                        <div  className={`${u.background} user`}
                        ><img src={u.img} />
                        </div>
                        <div className="name">
                            {u.name}
                        </div>
                    </Link>
                </div>)}
            </div>
        );
    }
}

export default Landing;