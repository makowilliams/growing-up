import React from 'react';
import ReactDOM from 'react-dom';
import BabySummary from '../Components/baby-summary';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BabySummary child={{ id: 1 }} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
