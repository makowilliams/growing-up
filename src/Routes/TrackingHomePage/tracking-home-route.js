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

    getAllData() {
        let type = '';
        if (this.state.type === 'feeding') {
            type = 'eating';
        } else type = this.state.type;
        this.context.getUserInfo().then((user) => {
            this.context.getChildInfo().then((child) => {
                this.context.getData(this.state.childId, type);
            });
        });
    }

    render() {
        let name = '';
        let child;
        if (!this.context.currentChildren) {
            return <div>Getting Data</div>;
        }
        if (!this.context.currentChildren[0]) {
            this.getAllData();
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
