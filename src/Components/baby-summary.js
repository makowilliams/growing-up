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
                <div className="baby-image image">
                    <p className="image-text">Image</p>
                </div>
                <h2>{this.props.child.first_name}</h2>
                <p>
                    Last Slept: <br />
                    Last Ate: <br />
                    Age: <br />
                </p>
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
