import React from 'react';
import ReactDOM from 'react-dom';
import TrackingHomeRoute from '../Routes/TrackingHomePage/tracking-home-route';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <TrackingHomeRoute match={{ params: {} }} />
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
