import React from 'react';
import ReactDOM from 'react-dom';
import TrackingActivePage from '../Routes/TrackingActivePage/tracking-active-route';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TrackingActivePage />, div);
    ReactDOM.unmountComponentAtNode(div);
});
