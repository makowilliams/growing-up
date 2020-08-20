import React from 'react';
import GrowingContext from '../growing-up-context';
import EditIcon from '@material-ui/icons/Edit';
import UpdateAge from './update-age';

export default class BabyAge extends React.Component {
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
                    >
                        <p>Age: {this.props.child.age} months</p>
                        {this.state.isVisible ? (
                            <EditIcon onClick={() => this.enableUpdateMode()} />
                        ) : null}
                    </div>
                ) : (
                    <UpdateAge
                        childId={this.props.child.id}
                        onUpdateSuccess={() => this.cancelUpdateMode()}
                    />
                )}
            </>
        );
    }
}
