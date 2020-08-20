import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HomeMenu from '../Components/home-menu';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <HomeMenu />
        </BrowserRouter>,
        div
    );
});
