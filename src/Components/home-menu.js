import React from 'react';
import { Link } from 'react-router-dom';
import GrowingContext from '../growing-up-context';
import TokenService from '../token-service';


export default class HomeMenu extends React.Component {
    static contextType = GrowingContext;

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    }

    render() {
        return (
            <div className="main-menu-container menu-home">
                <div className="left-menu-container">
                    <Link to="/home" className="left-menu-button">
                        Home
                    </Link>
                    <Link
                        to="/tracking/sleeping"
                        className="left-menu-button"
                        onClick={() => this.context.updateType('sleeping')}
                    >
                        Sleep
                    </Link>
                    <Link
                        to="/tracking/feeding"
                        className="left-menu-button"
                        onClick={() => this.context.updateType('feeding')}
                    >
                        Feeding
                    </Link>
                </div>
                <div className="main-button-container">

                    <Link 
                        to="/" 
                        className="link"
                        onClick={() => this.handleLogoutClick()}
                        >

                        Log Out
                    </Link>
                </div>
            </div>
        );
    }
}
