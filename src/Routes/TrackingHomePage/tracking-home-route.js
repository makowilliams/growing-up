import React from 'react';
import HomeMenu from '../../Components/home-menu';
import TrackerList from '../../Components/tracker-list';
import StartButton from '../../Components/start-button';
import GrowingContext from '../../growing-up-context';
import { Redirect } from 'react-router-dom';

export default class TrackingHomePage extends React.Component {
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
            childId: props.match.params.childId
        };
    }

    render() {
        let name = '';
        let child;
        if (!this.context.currentChild) {
            return <Redirect to="/home"></Redirect>;
        }
        if (!this.context.currentChildren) {
            return <div>Getting Data</div>;
        } else {
            child = this.context.currentChildren.find(
                (child) => child.id == this.state.childId
            );
            name = child.first_name;
        }
        return (
            <div className="tracking">
                <HomeMenu />
                <div className="main-container">
                    {this.state.type === 'feeding' ? (
                        <>
                            <h1 className="feed-header">Feeding Tracker Log</h1>
                            <h2>{name}</h2>
                        </>
                    ) : (
                        <>
                            <h1 className="feed-header">
                                Sleeping Tracker Log
                            </h1>
                            <h2>{name}</h2>
                        </>
                    )}
                    <TrackerList type={this.state.type} child={child} />
                    <StartButton type={this.state.type} />
                    <button onClick={() => window.history.back()}>Back</button>
                </div>
            </div>
        );
    }
}
