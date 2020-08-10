import React from 'react';
import ReactDOM from 'react-dom';
import TrackerList from '../Components/tracker-list';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TrackerList />, div);
    ReactDOM.unmountComponentAtNode(div);
});
