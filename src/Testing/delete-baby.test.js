import React from 'react';
import DeleteBaby from '../Components/delete-baby';
import ReactDOM from 'react-dom';
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

test('renders delete baby component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <GrowingContext.Provider value={contextValue}>
            <BrowserRouter>
                <DeleteBaby child={contextValue.currentChild}/>
            </BrowserRouter>   
        </GrowingContext.Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
   
});
