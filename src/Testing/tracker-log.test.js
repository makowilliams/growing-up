import React from 'react';
import ReactDOM from 'react-dom';
import TrackerLog from '../Components/tracker-log';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TrackerLog />, div);
    ReactDOM.unmountComponentAtNode(div);
});