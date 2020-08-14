import React from 'react';
import BabyWeight from '../Components/baby-weight';
import GrowingContext from '../growing-up-context';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
    updateType: jest.fn(() => {})
};

test('renders baby weight', () => {
    const { getByText } = render(
        <GrowingContext.Provider value={contextValue}>
            <BrowserRouter>
                <BabyWeight child={contextValue.currentChild} />
            </BrowserRouter>
        </GrowingContext.Provider>
    );
    const linkElement = getByText('Weight: lbs');
    expect(linkElement).toBeInTheDocument();
});
