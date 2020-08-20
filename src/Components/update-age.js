import React from 'react';
import GrowingContext from '../growing-up-context';
import BabyApiService from '../baby-api-service';
import CancelIcon from '@material-ui/icons/Cancel';

export default class UpdateAge extends React.Component {
    static contextType = GrowingContext;
    static defaultProps = {
        onUpdateSuccess: () => {}
    };

    state = { error: null };

    handleUpdateAge = (e) => {
        e.preventDefault();
        this.setState({ error: null });

        const { age } = e.target;

        if (!age) {
            this.setState({ error: 'Please select an age' });
        }

        const newAge = {
            childId: this.props.childId,
            age: age.value
        };

        BabyApiService.patchAge(newAge)
            .then((res) => {
                age.value = '';
                this.context.updateAge(newAge);
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
                className="age-form"
                onSubmit={(e) => this.handleUpdateAge(e)}
            >
                <CancelIcon onClick={() => this.props.onUpdateSuccess()} />
                <label htmlFor="age">Age(months)</label>
                <select name="age" id="age" required>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                </select>
                <button type="submit"> Add </button>

                <div role="alert">
                    {error && <p className="error">{error}</p>}
                </div>
            </form>
        );
    }
}
