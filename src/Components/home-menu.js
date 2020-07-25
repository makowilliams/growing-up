import React from 'react';
import { Link } from 'react-router-dom';

export default class HomeMenu extends React.Component {
    render() {
        return (
            <div className="main-menu-container menu-home">
                <div className="left-menu-container">
                    <Link to="/home" className="left-menu-button">
                        Home
                    </Link>
                    <Link to="/tracking/sleeping" className="left-menu-button">
                        Sleep
                    </Link>
                    <Link to="/tracking/feeding" className="left-menu-button">
                        Feeding
                    </Link>
                </div>
                <div className="main-button-container">
                    <Link to="/" className="link">
                        Log Out
                    </Link>
                </div>
            </div>
        );
    }
}
