import React from 'react';
import GrowingContext from '../growing-up-context';
import BabyApiService from '../baby-api-service';

export default class UpdateWeight extends React.Component {
    static contextType = GrowingContext;

    cancelUpdateMode() {
        this.setState({
            updateMode: false,
            isVisible: false
        });
    }

    validateWeight = (weight) => {
        if (!weight.value.match(/^\d+\.\d{2}?$/)) {
            return 'Weight must be to two decimal places';
        }
    };

    state = { error: null };

    handleupdateWeight = (e) => {
        e.preventDefault();
        this.setState({ error: null });

        const { weight } = e.target;

        if (weight) {
            const weightErr = this.validateWeight(weight);
            if (weightErr) {
                this.setState({ error: weightErr });
            }
        }

        const newWeight= {
            childId: this.props.childId,
            weight: weight.value
        }

        BabyApiService.patchWeight(newWeight)
            .then((res) => {
                weight.value = '';
                this.context.updateWeight(newWeight);
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
            <form onSubmit={(e) => this.handleupdateWeight(e)}>
                <label htmlFor="weight">Weight: </label>
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
