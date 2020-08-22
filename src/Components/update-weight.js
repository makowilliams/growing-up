import React from 'react';
import GrowingContext from '../growing-up-context';
import BabyApiService from '../baby-api-service';
import CancelIcon from '@material-ui/icons/Cancel';

export default class UpdateWeight extends React.Component {
    static contextType = GrowingContext;
    static defaultProps = {
        onUpdateSuccess: () => {}
    };

    validateWeight = (weight) => {
        if (!weight.value.match(/^\d+\.\d{2}?$/)) {
            return 'Weight must be to two decimal places';
        }
    };

    state = { error: null };

    handleUpdateWeight = (e) => {
        e.preventDefault();
        this.setState({ error: null });

        const { weight } = e.target;

        if (weight) {
            const weightErr = this.validateWeight(weight);
            if (weightErr) {
                this.setState({ error: weightErr });
            }
        }

        const newWeight = {
            childId: this.props.childId,
            weight: weight.value
        };

        BabyApiService.patchWeight(newWeight)
            .then((res) => {
                weight.value = '';
                this.context.updateWeight(newWeight);
                this.props.onUpdateSuccess();
            })
            .catch((res) => {
                this.setState({
                    error: res.error
                        ? res.error
                        : 'Sorry, something went wrong.'
                });
            });
    };

    render() {
        const { error } = this.state;

        return (
            <form
                className="weight-form"
                onSubmit={(e) => this.handleupdateWeight(e)}
            >
                <CancelIcon onClick={() => this.props.onUpdateSuccess()} />
                <label htmlFor="weight">
                    <span className="weight-input">Weight:</span>{' '}
                </label>
                <input
                    className="name-input"
                    id="weight"
                    name="weight"
                    required
                />
                <button type="submit"> Add </button>

                <div role="alert">
                    {error && <p className="error">{error}</p>}
                </div>
            </form>
        );
    }
}
