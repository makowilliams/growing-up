import React from 'react';
import BabyAge from '../Components/baby-age';
import GrowingContext from '../growing-up-context';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const contextValue = {
    type: 'feeding',
    currentChild: {
        id: 1,
        first_name: 'liam',
        age: 8,
        weight:  10.22,
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
            weight:  10.22,
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
    updateType: jest.fn(() => {})
};

test('renders baby age', () => {
    const { getByText } = render(
        <GrowingContext.Provider value={contextValue}>
            <BrowserRouter>
                <BabyAge child={contextValue.currentChild} />
            </BrowserRouter>
        </GrowingContext.Provider>
    );
    const linkElement = getByText('Age: 8 months');
    expect(linkElement).toBeInTheDocument();
});
