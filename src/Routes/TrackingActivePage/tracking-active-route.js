import React from 'react';
import HomeMenu from '../../Components/home-menu';
import Timer from '../../Components/timer';
import TimerList from '../../Components/timer-list';
import StopButton from '../../Components/stop-button';

export default class TrackingActivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: props.props.match.params.type,
        };
    }
    render() {
        return (
            <div className="tracking-active">
                <HomeMenu />
                <div className="main-container feed-main-container">
                    <div className="feed-dashboard">
                        {this.state.type === 'feeding' ? (
                            <h2 className="feed-header">Feeding Tracker</h2>
                        ) : (
                            <h2 className="sleep-header">Sleep Tracker</h2>
                        )}
                        <Timer />
                    </div>
                    <div className="feed-buttons-container">
                        <button>Left</button>
                        <button>Bottle</button>
                        <button>Right</button>
                    </div>
                    <TimerList />
                    <StopButton />
                </div>
            </div>
        );
    }
}
