import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../Routes/HomePage/home-route';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
