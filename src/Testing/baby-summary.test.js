import React from 'react';
import ReactDOM from 'react-dom';
import BabySummary from '../Components/baby-summary';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BabySummary />, div);
    ReactDOM.unmountComponentAtNode(div);
});
