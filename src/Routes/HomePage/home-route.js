import React from 'react';
import HomeMenu from '../../Components/home-menu';
import GrowingContext from '../../growing-up-context';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import BabySummary from '../../Components/baby-summary';

export default class HomePage extends React.Component {
    static contextType = GrowingContext;

    constructor() {
        super();

        this.state = {
            isVisible: false,
            name: '',
            age: null,
            updateMode: false
        };
    }

    componentDidMount() {
        this.context.getUserInfo().then((user) => {
            this.context.getChildInfo();
        });
    }

    toggleVisibility() {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible
        }));
    }

    enableUpdateMode() {
        this.setState({
            updateMode: true,
            isVisible: true
        });
    }

    cancelUpdateMode() {
        this.setState({
            updateMode: false,
            isVisible: false
        });
    }

    updateState = (newUpdate) => {
        const key = Object.keys(newUpdate);
        const value = Object.values(newUpdate);

        this.setState({
            [key[0]]: value[0]
        });
    };

    render() {
        return (
            <div className="home-page">
                <HomeMenu />
                <div className="dashboard">
                    <div className="baby-container">
                        <div className="baby-image image">
                            <p className="image-text">Image</p>
                        </div>
                        {this.state.updateMode === false ? (
                            <div
                                className="baby-copy-container"
                                onMouseEnter={() => this.toggleVisibility()}
                                onMouseLeave={() => this.toggleVisibility()}
                            >
                                <h3 className="baby-name">Baby Name</h3>
                                <p className="age">Age: 13 Months</p>
                                {this.state.isVisible ? (
                                    <EditIcon
                                        onClick={() => this.enableUpdateMode()}
                                    />
                                ) : null}
                            </div>
                        ) : (
                            <form className="baby-input-container">
                                <input
                                    className="name-input"
                                    placeholder="Baby Name"
                                />
                                <input
                                    className="age-input"
                                    placeholder="Age: 13 Months"
                                />
                                <CheckCircleIcon
                                    onClick={() => this.cancelUpdateMode()}
                                />
                                <CancelIcon
                                    onClick={() => this.cancelUpdateMode()}
                                />
                            </form>
                        )}
                    </div>
                    <div className="summary-container">
                        {!this.context.currentChildren.length ? (
                            <p id="empty-results-error">
                                Sorry, something went wrong.
                            </p>
                        ) : (
                            this.context.currentChildren.map((child) => {
                                // console.log('child', child);
                                return (
                                    <BabySummary key={child.id} child={child} />
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
