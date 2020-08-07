import React from 'react';
import ReactDOM from 'react-dom';
import TrackingHomeRoute from '../Routes/TrackingHomePage/tracking-home-route';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TrackingHomeRoute />, div);
    ReactDOM.unmountComponentAtNode(div);
});
