import React from 'react';
import ReactDOM from 'react-dom';
import FeedingButtons from '../Components/select-opt-buttons';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeedingButtons />, div);
    ReactDOM.unmountComponentAtNode(div);
});
