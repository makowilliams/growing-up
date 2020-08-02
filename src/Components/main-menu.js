import React from 'react';
import { Link } from 'react-router-dom';

export default class MainMenu extends React.Component {
    render() {
        return (
            <div className="main-menu-container container">
                <div className="logo">LOGO</div>
                <div className="menu-button-container container">
                    <button>Sign Up</button>
                    <Link to="/login" className="link">
                        Log In
                    </Link>
                </div>
            </div>
        );
    }
}
