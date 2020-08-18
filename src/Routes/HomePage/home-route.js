import React from 'react';
import HomeMenu from '../../Components/home-menu';
import GrowingContext from '../../growing-up-context';
import EditIcon from '@material-ui/icons/Edit';
import BabySummary from '../../Components/baby-summary';
import AddBaby from '../../Components/add-baby';
import { ReactComponent as PlusSign } from '../../assets/plus-sign.svg';

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
        this.context.getChildInfo();
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

    render() {
        return (
            <div className="home-page">
                <HomeMenu />
                <div className="main-view-home">
                    <div className="dashboard">
                        <div className="summary-container">
                            <div className="baby-summaries">
                                {!this.context.currentChildren.length ? (
                                    <p id="empty-results-error">
                                        Thanks for joining! Please add a child.
                                    </p>
                                ) : (
                                    this.context.currentChildren.map(
                                        (child) => {
                                            return (
                                                <BabySummary
                                                    key={child.id}
                                                    child={child}
                                                />
                                            );
                                        }
                                    )
                                )}
                            </div>
                            <div className="baby-container">
                                {this.state.updateMode === false ? (
                                    <div
                                        className="baby-copy-container"
                                        onClick={() => this.enableUpdateMode()}
                                    >
                                        <h3 className="baby-name add-baby">
                                            Add Baby{' '}
                                        </h3>
                                        <PlusSign />

                                        {this.state.isVisible ? (
                                            <EditIcon
                                                onClick={() =>
                                                    this.enableUpdateMode()
                                                }
                                            />
                                        ) : null}
                                    </div>
                                ) : (
                                    <AddBaby
                                        onAddSuccess={() =>
                                            this.cancelUpdateMode()
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
