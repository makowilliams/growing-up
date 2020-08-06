import React from 'react';
import HomeMenu from '../../Components/home-menu';
import TrackerList from '../../Components/tracker-list';
import StartButton from '../../Components/start-button';
import GrowingContext from '../../growing-up-context';

export default class TrackingHomePage extends React.Component {
    static contextType = GrowingContext;
    constructor(props) {
        super(props);

        this.state = {
            type: props.match.params.type,
            childId: props.match.params.childId
        };
    }

    componentDidMount() {
        if (this.state.type === 'feeding') {
            this.context.getData(this.state.childId, 'eating');
        } else {
            this.context.getData(this.state.childId, this.state.type);
        }
    }

    render() {
        return (
            <div className="tracking">
                <HomeMenu />
                <div className="main-container">
                    {this.state.type === 'feeding' ? (
                        <h1 className="feed-header">Feeding Tracker Log</h1>
                    ) : (
                        <h1 className="feed-header">Sleeping Tracker Log</h1>
                    )}
                    <TrackerList />
                    <StartButton type={this.state.type} />
                    <button onClick={() => window.history.back()}>Back</button>
                </div>
            </div>
        );
    }
}
