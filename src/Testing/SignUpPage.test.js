import React from 'react';
import ReactDOM from 'react-dom';
import SignUpPage from '../Routes/SignUpPage/SignUpPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignUpPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});
