import React from 'react';
import ReactDOM from 'react-dom';
import TimerList from '../Components/timer-list';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimerList />, div);
    ReactDOM.unmountComponentAtNode(div);
});