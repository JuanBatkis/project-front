import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomeContainer extends Component {
    render() {
        return(
            <div className="uk-section">
                This is my home
                <Link to="/signup">
                    Register
                </Link>
                <Link to="/login">
                    Login
                </Link>
                <div className="uk-container">
                    <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style={{backgroundImage: "url('https://i.pinimg.com/736x/9e/e2/88/9ee288c1f217ea81c9bf3ce50260df18.jpg')"}}>
                        <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                            <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Headline</h1>
                            <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeContainer;