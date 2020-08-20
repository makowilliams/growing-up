import React from 'react';
import GrowingContext from '../growing-up-context';
import EditIcon from '@material-ui/icons/Edit';
import UpdateWeight from './update-weight';

export default class BabyWeight extends React.Component {
    static contextType = GrowingContext;

    constructor() {
        super();

        this.state = {
            isVisible: false,
            updateMode: false
        };
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
            <>
                {this.state.updateMode === false ? (
                    <div
                        onMouseEnter={() => this.toggleVisibility()}
                        onMouseLeave={() => this.toggleVisibility()}
                        className="baby-weight-container"
                    >
                        <p className="baby-weight">
                            <span className="bold">Weight:</span>{' '}
                            {this.props.child.weight}lbs
                        </p>
                        {this.state.isVisible ? (
                            <EditIcon
                                className="baby-weight-icon"
                                onClick={() => this.enableUpdateMode()}
                            />
                        ) : null}
                    </div>
                ) : (
                    <UpdateWeight
                        childId={this.props.child.id}
                        onUpdateSuccess={() => this.cancelUpdateMode()}
                    />
                )}
            </>
        );
    }
}
