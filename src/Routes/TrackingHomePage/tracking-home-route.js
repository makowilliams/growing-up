import React from 'react';
import { Link } from 'react-router-dom';
import HomeMenu from '../../Components/home-menu';
import TrackerList from '../../Components/tracker-list';
import StartButton from '../../Components/start-button';

export default class TrackingHomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.props.match.params.type,
        };
    }

    componentDidMount() {
        this.setState({
            type: this.props.props.match.params.type,
        });
    }

    render() {
        return (
            <div className="tracking">
                <HomeMenu />
                <div className="main-container">
                    {this.state.type === 'feeding' ? (
                        <h1 className="feed-header">Feeding Tracker</h1>
                    ) : (
                        <h1 className="feed-header">Sleeping Tracker</h1>
                    )}
                    <TrackerList />
                    {this.state.type === 'feeding' ? (
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
