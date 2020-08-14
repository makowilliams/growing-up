import React from 'react';
import BabyApiService from '../baby-api-service';
import GrowingContext from '../growing-up-context';
import CancelIcon from '@material-ui/icons/Cancel';


export default class AddBaby extends React.Component {
    static contextType = GrowingContext;

    static defaultProps = {
        onAddSuccess: () => {}
    };

    validateWeight = weight => {
        if(!weight.value.match(/^\d+\.\d{2}?$/)){
            return 'Weight must be to two decimal places';
        }
    }

    state = { error: null };

    handleAddBaby = (e) => {
        e.preventDefault();
        this.setState({ error: null });

        const { first_name, age, weight } = e.target;

        if(weight){
            const weightErr = this.validateWeight(weight)
            if(weightErr) {
                this.setState({error: weightErr})
            }    
        }
        if(!age){
            this.setState({error: 'Please enter an age'})
        }

        const newBaby = {
            first_name: first_name.value,
            age: age.value,
            weight: weight.value,
        }

        BabyApiService.postBaby(newBaby)
            .then((res) => {
                this.props.onAddSuccess();
                this.context.addNewChild(res);
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
                className="baby-input-container"
                onSubmit={(e) => this.handleAddBaby(e)}
            >
                <CancelIcon onClick={() => this.props.onAddSuccess()} />
                <label htmlFor='first_name'>Name</label>
                <input
                    className="name-input"
                    id='first_name'
                    name='first_name'
                    required
                />
                <label htmlFor='weight'>Weight</label>
                <input
                    className="name-input"
                    id='weight'
                    name='weight'
                    required
                />
                <label htmlFor='age'>Age(months)</label>
                <select name='age' id='age' required>
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                    <option value='11'>11</option>
                    <option value='12'>12</option>
                    <option value='13'>13</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                    <option value='16'>16</option>
                    <option value='17'>17</option>
                    <option value='18'>18</option>
                </select>
                <button type='submit'> Add </button>    
                <div role="alert">
                    {error && <p className="error">{error}</p>}
                </div>
            </form>
        );
    }
}