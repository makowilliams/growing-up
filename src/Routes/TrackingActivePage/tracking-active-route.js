import React from 'react';
import HomeMenu from '../../Components/home-menu';
import Timer from '../../Components/timer';
import StopButton from '../../Components/stop-button';
import SelectOptButtons from '../../Components/select-opt-buttons';
import GrowingContext from '../../growing-up-context';
import { Redirect } from 'react-router-dom';

export default class TrackingActivePage extends React.Component {
    static contextType = GrowingContext;

    constructor(props) {
        super(props);
        window.addEventListener('beforeunload', (event) => {
            event.preventDefault();
            event.returnValue = '';
            return '';
        });

        this.state = {
            type: props.match.params.type,
            error: null
        };
    }

    setError(error) {
        this.setState({
            error: error
        });
    }

    render() {
        if (!this.context.currentChild) {
            return <Redirect to="/home"></Redirect>;
        }
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
                    <SelectOptButtons setError={this.setError.bind(this)} />
                    <StopButton
                        error={this.state.error}
                        setError={this.setError.bind(this)}
                    />
                </div>
            </div>
        );
    }
}
