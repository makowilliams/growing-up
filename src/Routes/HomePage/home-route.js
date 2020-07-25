import React from 'react';
import HomeMenu from '../../Components/home-menu';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <HomeMenu />
                <div className="dashboard">
                    <div className="baby-container">
                        <div className="baby-image image">
                            <p className="image-text">Image</p>
                        </div>
                        <div className="baby-copy-container">
                            <h3 className="baby-name">Baby Name</h3>
                            <p className="age">Age: 13 Months</p>
                            <p className="weight">Weight: 20lbs</p>
                        </div>
                    </div>
                    <div className="summary-container">
                        <h2>The last time #Baby Name:</h2>
                        <p>
                            Slept: <br />
                            Ate: <br />
                            Was Changed: <br />
                        </p>
                    </div>
                </div>
                <div className="action-button-container">
                    <Link to="/tracking/sleeping" className="link">
                        Sleep
                    </Link>
                    <Link to="/tracking/feeding" className="link">
                        Feeding
                    </Link>
                    {/* <a href="Changing">Changing</a> */}
                </div>
            </div>
        );
    }
}
