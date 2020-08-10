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
            name: '',
            age: null,
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
        console.log(this.context)
        return (
            <>
                {this.state.updateMode === false ? (
                    <div
                        // className="baby-copy-container"
                        onMouseEnter={() => this.toggleVisibility()}
                        onMouseLeave={() => this.toggleVisibility()}
                    >
                        <p>Weight: {this.props.child.weight}lbs</p>
                        {this.state.isVisible ? (
                            <EditIcon onClick={() => this.enableUpdateMode()} />
                        ) : null}
                    </div>
                ) : (
                    <UpdateWeight childId={this.props.child.id} />
                )}
            </>
        );
    }
}
