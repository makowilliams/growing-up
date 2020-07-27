import React from 'react';
import { Link } from 'react-router-dom';
import { GrowingContext } from '../growing-up-context';

export default class HomeMenu extends React.Component {
    render() {
        return (
            <GrowingContext.Consumer>
                {(context) => {
                    return (
                        <div className="main-menu-container menu-home">
                            <div className="left-menu-container">
                                <Link to="/home" className="left-menu-button">
                                    Home
                                </Link>
                                <Link
                                    to="/tracking/sleeping"
                                    className="left-menu-button"
                                    onClick={() =>
                                        context.updateContext({
                                            type: 'sleeping',
                                        })
                                    }
                                >
                                    Sleep
                                </Link>
                                <Link
                                    to="/tracking/feeding"
                                    className="left-menu-button"
                                    onClick={() =>
                                        context.updateContext({
                                            type: 'feeding',
                                        })
                                    }
                                >
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
                }}
            </GrowingContext.Consumer>
        );
    }
}
