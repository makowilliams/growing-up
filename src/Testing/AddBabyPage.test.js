import React from 'react';
import ReactDOM from 'react-dom';
import AddBabyPage from '../Routes/AddBabyPage/AddBabyPage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddBabyPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});
