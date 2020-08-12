import React from 'react';
import GrowingContext from '../growing-up-context';
import DeleteIcon from '@material-ui/icons/Delete';
import BabyApiService from '../baby-api-service';

export default class DeleteBaby extends React.Component {
    static contextType = GrowingContext;

    constructor() {
        super();

        this.state = {
            isVisible: false,
            error: null
        };
    }

    toggleVisibility() {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible
        }));
    }

    handleDeleteBaby = (e) => {
        console.log(this.props.child.id)
        e.preventDefault();
        this.setState({ error: null });

        BabyApiService.delete_baby(this.props.child.id)
            .then((res) => {
                console.log('test', res);
                
                // this.props.onUpdateSuccess();
            })
            .catch((res) => {
                console.log(res);
                this.setState({
                    error: res.error
                        ? res.error
                        : 'Sorry, something went wrong.'
                });
            });
    }


    render() {
        const { error } = this.state;
        return (
            <>
                <div
                    onMouseEnter={() => this.toggleVisibility()}
                    onMouseLeave={() => this.toggleVisibility()}
                >
                    <h2>{this.props.child.first_name}</h2>
                    {this.state.isVisible ? (
                        <DeleteIcon onClick={(e) => this.handleDeleteBaby(e)} />
                    ) : null}
                </div>
                <div role="alert">
                {error && <p className="error">{error}</p>}
                </div>
            </>
        );
    }
}