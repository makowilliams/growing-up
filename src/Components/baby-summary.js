import React from 'react';
import { Link } from 'react-router-dom';
import GrowingContext from '../growing-up-context';
import BabyWeight from './baby-weight';
import BabyAge from './baby-age';
import moment from 'moment';
import babyGirl from '../../src/assets/baby-girl/baby-girl-lg.png';
import DeleteBaby from './delete-baby';
import BabyApiService from '../baby-api-service';

export default class BabySummary extends React.Component {
    static contextType = GrowingContext;
    static defaultProps = {
        onUpdateSuccess: () => {}
    };

    state = { error: null };

    updateTypeAndChild(e) {
        this.context.setSelectedChild(this.props.child);
        this.context.updateType(e.target.name);
    }

    onChange = (ev) => {
        this.context.updateImageState(ev.target.files[0]);
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        if (!this.context.image) return;
        this.uploadImage(this.context.image);
    };

    chooseFile = (ev) => {
        this.setState({error: null})
        this.fileInput.click();
    }

    uploadImage = (imageFile) => {
        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });

        toBase64(imageFile).then((encodedImage) => {
            BabyApiService.updateImage(this.props.child.id, encodedImage)
                .then((res) => {
                    this.context.renderImage(encodedImage, this.props.child.id);
                    this.props.onUpdateSuccess();
                })
                .catch((res) => {
                    this.setState({
                        error: res.error
                            ? res.error
                            : 'Sorry, something went wrong.'
                    });
                });
        });
    };


    render() {
        const { error } = this.state;
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

        return (
            <div className="summary-container">
                <img
                    className="child-img"
                    src={this.props.child.image}
                    alt="baby"
                    width="300"
                />

                <form
                    onSubmit={this.onSubmit.bind(this)}
                    className="update-img-container"
                >
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={this.onChange}
                        ref={(fileInput) => (this.fileInput = fileInput)}
                        style={{ display: 'none' }}
                    />
                    <button onClick={() => this.fileInput.click()}>
                        Choose a file
                    </button>
                    <button type="submit">Submit</button>
                </form>

                    <form
                        onSubmit={this.onSubmit.bind(this)}
                        className="child-info-container"
                    >
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={this.onChange}
                            ref={(fileInput) => (this.fileInput = fileInput)}
                            style={{ display: 'none' }}
                        />
                        <button onClick={() => this.chooseFile()}>
                            Choose a file
                        </button>
                        <button type="submit">Submit</button>
                    </form>
                    <div role="alert">
                        {error && <p className="error">{error}</p>}
                    </div>
                    <div className="name-age">
                        {/* <h2 className="child-name">
                            {this.props.child.first_name}
                        </h2>
                        <div className="img-container">
                            <img
                                src={babyGirl}
                                alt="image of baby girl"
                                className="baby-image"
                            />
                        </div> */}
                        <DeleteBaby child={this.props.child} />
                        <BabyAge child={this.props.child} />
                        <BabyWeight child={this.props.child} />
                    </div>

                    <p className="baby-age">
                        <span className="bold">Age:</span>{' '}
                        {this.props.child.age} months
                    </p>
                    <BabyWeight child={this.props.child} />
                </div>
                <div className="additional-info">
                    <div className="baby-info">
                        <p className="last-slept">
                            <span className="bold">Last Slept:</span>{' '}
                            {lastSlept}
                        </p>
                        <p className="last-ate">
                            <span className="bold">Last Ate:</span> {lastAte}
                        </p>
                    </div>

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
