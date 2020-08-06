import React from 'react';
import { Link } from 'react-router-dom';
import GrowingContext from '../growing-up-context';
import moment from 'moment';

export default class BabySummary extends React.Component {
    static contextType = GrowingContext;

    updateTypeAndChild(e) {
        this.context.setSelectedChild(this.props.child);
        this.context.updateType(e.target.name);
    }

    componentDidMount() {
        this.context.updateType('sleeping');
        this.context.updateType('eating');
        this.context.getData(this.props.child.id, 'sleeping');
        this.context.getData(this.props.child.id, 'eating');
    }

    render() {
        if (!this.props.child.sleeping || !this.props.child.eating) {
            return <div>Getting Data</div>;
        }

        const lastSlept = this.props.child.sleeping.slice(-1)[0].date;
        const lastAte = this.props.child.eating.slice(-1)[0].date;

        return (
            <div className="summary-container">
                <div className="baby-image image">
                    <p className="image-text">Image</p>
                </div>
                <div className="name-age">
                    <h2>{this.props.child.first_name}</h2>
                    <p>Age: {this.props.child.age} months</p>
                </div>

                <p>Last</p>
                <ul>
                    <li>Slept: {moment(lastSlept).format('h:mma')}</li>
                    <li>Ate: {moment(lastAte).format('h:mma')}</li>
                </ul>
                <div className="action-button-container">
                    <Link
                        to={`/tracking/sleeping/${this.props.child.id}`}
                        className="link"
                        name="sleeping"
                        onClick={(e) => this.updateTypeAndChild(e)}
                    >
                        Sleep
                    </Link>
                    <Link
                        to={`/tracking/feeding/${this.props.child.id}`}
                        className="link"
                        name="feeding"
                        onClick={(e) => this.updateTypeAndChild(e)}
                    >
                        Feeding
                    </Link>
                </div>
            </div>
        );
    }
}
