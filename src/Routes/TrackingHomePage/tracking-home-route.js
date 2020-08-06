import React from 'react';
import { Link } from 'react-router-dom';
import HomeMenu from '../../Components/home-menu';
import TrackerList from '../../Components/tracker-list';
import StartButton from '../../Components/start-button';
import GrowingContext from '../../growing-up-context';

export default class TrackingHomePage extends React.Component {
    static contextType = GrowingContext;

    constructor(props) {
        super(props);
        this.state = {
            type: props.match.params.type
        };
    }

    componentDidMount() {
        if (this.context.type === 'feeding') {
            this.context.getData(this.context.currentChild.id, 'eating');
        } else {
            this.context.getData(
                this.context.currentChild.id,
                this.context.type
            );
        }
    }

    render() {
        console.log('current child', this.context.currentChild);
        return (
            <div className="tracking">
                <HomeMenu />
                <div className="main-container">
                    {this.context.type === 'feeding' ? (
                        <>
                            <h1 className="feed-header">Feeding Tracker Log</h1>
                            <h2>{this.context.currentChild.first_name}</h2>
                        </>
                    ) : (
                        <>
                            <h1 className="feed-header">
                                Sleeping Tracker Log
                            </h1>
                            <h2>{this.context.currentChild.first_name}</h2>
                        </>
                    )}
                    <TrackerList type={this.state.type} />
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
                    <button onClick={() => window.history.back()}>Back</button>
                </div>
            </div>
        );
    }
}
