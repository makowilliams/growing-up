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

    onFileLoad() {}

    handleUpdateImg() {}

    render() {
        let lastSlept;
        if (this.props.child.sleeping) {
            let slept = this.props.child.sleeping.slice(-1)[0].date;
            lastSlept = moment(slept).format('h:mma');
        } else lastSlept = 'No sessions yet';

        let lastAte;
        if (this.props.child.eating) {
            let ate = this.props.child.eating.slice(-1)[0].date;
            lastAte = moment(ate).format('h:mma');
        } else lastAte = 'No sessions yet';
        
        return (
            
            <div className="summary-container">
                {/* <div className="update-img-container">
                    <input
                        type="file"
                        id="file-input"
                        name="file-input"
                        ref={(input) => (this.fileInput = input)}
                        onDragOver={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onDrop={this.onFileLoad.bind(this)}
                        onChange={this.onFileLoad.bind(this)}
                    />
                    <div className="update-img">
                        <img
                            className="child-img"
                            // src={childImg}
                            alt="baby image"
                            width="300"
                        />
                    </div>
                </div> */}
                <div className="baby-image image">
                    <p className="image-text">Image</p>
                </div>
                <div className="child-info-container">
                    <div className="name-age">
                        <h2>{this.props.child.first_name}</h2>
                        <p>Age: {this.props.child.age} months</p>
                        <p>Weight: {this.props.child.weight} lbs</p>
                    </div>

                    <p>Last Slept: {lastSlept}</p>
                    <p>Last Ate: {lastAte}</p>

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
            </div>
        );
    }
}
