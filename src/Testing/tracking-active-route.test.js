import React from 'react';
import ReactDOM from 'react-dom';
import TrackingActivePage from '../Routes/TrackingActivePage/tracking-active-route';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <TrackingActivePage match={{ params: {} }} />
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
