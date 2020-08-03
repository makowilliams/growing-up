import React from 'react';
import { Link } from 'react-router-dom';
import GrowingContext from '../growing-up-context';

export default class BabySummary extends React.Component {
    static contextType = GrowingContext;

    updateTypeAndChild(e){
        this.context.setSelectedChild(this.props.child)
        this.context.updateType(e.target.name)
    }

    render() {
        return (
            <div className="summary-container">
                <h2>{this.props.child.first_name}</h2>
                <p>
                    Slept: <br />
                    Ate: <br />
                    Was Changed: <br />
                </p>
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