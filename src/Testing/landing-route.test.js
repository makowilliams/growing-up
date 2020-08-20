import React from 'src/Testing/node_modules/react';
import ReactDOM from 'src/Testing/node_modules/react-dom';
import LandingPage from 'src/Routes/LandingPage/landing-route';
import { MemoryRouter } from 'src/Testing/node_modules/react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <LandingPage />
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
