import React from 'react';
import DeleteSession from '../Components/delete-session';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import GrowingContext from '../growing-up-context';

const contextValue = {
    type: 'feeding',
    eating: [
        {
            0: {
                id: 1,
                date: '2020-08-09T22:40:23.934Z',
                duration: '00:00:09',
                food_type: 'breast_fed',
                id: 1,
                notes: '',
                side_fed: 'both'
            }
        }
    ]
};

test('renders delete session component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <GrowingContext.Provider value={contextValue}>
            <BrowserRouter>
                <DeleteSession child={contextValue} />
            </BrowserRouter>
        </GrowingContext.Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
