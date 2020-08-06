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
        if (!this.context.sleeping || !this.context.eating) {
            return <div>can't display data</div>;
        }
        console.log('sleep data', this.context.sleeping);
        console.log('feed data', this.context.eating);

        const lastSlept = this.context.sleeping.slice(-1)[0].date;
        const lastAte = this.context.eating.slice(-1)[0].date;

        return (
            <div className="summary-container">
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
                        to="/tracking/sleeping"
                        className="link"
                        name="sleeping"
                        onClick={(e) => this.updateTypeAndChild(e)}
                    >
                        Sleep
                    </Link>
                    <Link
                        to="/tracking/feeding"
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
