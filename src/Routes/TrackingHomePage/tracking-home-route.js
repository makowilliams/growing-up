import React from 'react';
import { Link } from 'react-router-dom';
import HomeMenu from '../../Components/home-menu';
import TrackerList from '../../Components/tracker-list';
import StartButton from '../../Components/start-button';
import GrowingContext from '../../growing-up-context';

export default class TrackingHomePage extends React.Component {
    static contextType = GrowingContext;
    render() {
        return (
            <div className="tracking">
                <HomeMenu />
                <div className="main-container">
                    {this.context.type === 'feeding' ? (
                        <h1 className="feed-header">Feeding Tracker</h1>
                    ) : (
                        <h1 className="feed-header">Sleeping Tracker</h1>
                    )}
                    <TrackerList />
                    {this.context.type === 'feeding' ? (
                        <Link
                            to="/tracking/feeding/active"
                            className="feed-start"
                        >
                            Start Feeding
                        </Link>
                    ) : (
                        <StartButton />
                    )}
                </div>
            </div>
        );
    }
}
