import React from 'react';
import { Link } from 'react-router-dom';
import GrowingContext from '../growing-up-context';
import BabyWeight from './baby-weight';
import moment from 'moment';
import DeleteBaby from './delete-baby';

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

    onChange = (ev) => {
        this.context.updateImageState(ev.target.files[0]);
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        const child = this.props.child.id;
        this.context.updateImage(child);
        this.context.getChildImage(child);
    };

    render() {
        let lastSlept;
        if (this.props.child.sleeping && this.props.child.sleeping.length) {
            let slept = this.props.child.sleeping.slice(-1)[0].date;
            lastSlept = moment(slept).format('h:mma');
        } else lastSlept = 'No sessions yet';

        let lastAte;
        if (this.props.child.eating && this.props.child.eating.length) {
            let ate = this.props.child.eating.slice(-1)[0].date;
            lastAte = moment(ate).format('h:mma');
        } else lastAte = 'No sessions yet';

        let childImg;
        if (this.context.image) {
            childImg = this.context.image;
        } else childImg = 'Add image';

        console.log('child img', childImg);

        return (
            <div className="summary-container">
                <form
                    onSubmit={this.onSubmit}
                    className="update-img-container"
                    encType="multipart/form-data"
                >
                    <div className="update-img">
                        <img
                            className="child-img"
                            // src={childImg}
                            alt="baby image"
                            width="300"
                        />
                    </div>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        ref={(input) => (this.fileInput = input)}
                        // onDragOver={(e) => {
                        //     e.preventDefault();
                        //     e.stopPropagation();
                        // }}
                        // onDrop={this.onFileLoad.bind(this)}
                        onChange={this.onChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <div className="child-info-container">
                    <div className="name-age">
                        <DeleteBaby child={this.props.child} />
                        <p>Age: {this.props.child.age} months</p>
                        <BabyWeight child={this.props.child} />
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
