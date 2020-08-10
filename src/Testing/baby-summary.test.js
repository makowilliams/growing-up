import React from 'react';
import ReactDOM from 'react-dom';
import BabySummary from '../Components/baby-summary';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';
import GrowingContext from '../growing-up-context';

const contextValue = {
    type: 'feeding',
    currentChild: {
        id: 1,
        first_name: 'liam',
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
        ],
        sleeping: [
            {
                0: {
                    id: 1,
                    date: '2020-08-09T22:40:23.934Z',
                    duration: '00:00:09',
                    id: 1,
                    notes: ''
                }
            }
        ]
    },
    currentChildren: [
        {
            id: 1,
            age: 8,
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
            ],
            sleeping: [
                {
                    0: {
                        id: 1,
                        date: '2020-08-09T22:40:23.934Z',
                        duration: '00:00:09',
                        id: 1,
                        notes: ''
                    }
                }
            ]
        }
    ],
    updateType: jest.fn(() => {}),
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <GrowingContext.Provider value={contextValue}>
            <BabySummary />, div)
        </GrowingContext.Provider>
    );
    ReactDOM.unmountComponentAtNode(div);
});

test('renders tracker log', () => {
    const { getByText } = render(
        <GrowingContext.Provider value={contextValue}>
            <BrowserRouter>
                <BabySummary child={contextValue.currentChild}/>
            </BrowserRouter>   
        </GrowingContext.Provider>
    );
    const linkElement = getByText(/Age/i);
    expect(linkElement).toBeInTheDocument();
});
