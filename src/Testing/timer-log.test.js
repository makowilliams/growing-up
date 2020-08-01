import React from 'react';
import ReactDOM from 'react-dom';
import TimerLog from '../Components/timer-log';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimerLog />, div);
    ReactDOM.unmountComponentAtNode(div);
});