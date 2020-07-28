import React from 'react';

export default class FeedingButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sleep_type_opts: ['Crying', 'Restless', 'Calm', 'crying', 'restless', 'calm'],
            sleep_category_opts: ['Nap', 'Bedtime', 'nap', 'bedtime', 'Length:'],
            food_type_opts: ['Bottle', 'Breast-fed', 'Formula', 'bottle', 'breast_fed', 'formula'],
            side_fed_opts: ['Left', 'Right', 'left', 'right', 'Side:'],

            food_type: '',
            side_fed: '',
            sleep_type: '',
            sleep_category: '',
        };
    }

    handleTypeOpts(e) {
        e.preventDefault();
        let value = {}
        if (this.props.type === 'feeding') {
            value = {food_type: e.target.value};
        } else {
            value = {sleep_type: e.target.value};
        }
        console.log(value);
    }
    handleCategoryOpts(e) {
        e.preventDefault();
        let value = {}
        if (this.props.type === 'feeding') {
            value = {side_fed: e.target.value};
        } else {
            value = {sleep_category: e.target.value};
        }
        console.log(value)
    }

    render() {
        let select_one =
            this.props.type === 'feeding'
                ? this.state['food_type_opts']
                : this.state['sleep_type_opts'];
        let select_two =
            this.props.type === 'feeding'
                ? this.state['side_fed_opts']
                : this.state['sleep_category_opts'];

        return (
            <div className="feed-buttons-container">
                <label htmlFor="type-options">Type: </label>

                <select
                    onChange={e => this.handleTypeOpts(e)}
                    className="type-options"
                    id="type-opts"
                >
                    <option disabled selected value>
                        {' '}
                        -- select an option --{' '}
                    </option>
                    <option value={select_one[3]}>{select_one[0]}</option>
                    <option value={select_one[4]}>{select_one[1]}</option>
                    <option value={select_one[5]}>{select_one[2]}</option>
                </select>
                <label htmlFor="category-options"> {select_two[4]} </label>
                <select
                    onChange={e => this.handleCategoryOpts(e)}
                    className="category-options"
                    id="category-opts"
                >
                    <option disabled selected value>
                        {' '}
                        -- select an option --{' '}
                    </option>
                    <option value={select_two[2]}>{select_two[0]}</option>
                    <option value={select_two[3]}>{select_two[1]}</option>
                </select>
            </div>
        );
    }
}
