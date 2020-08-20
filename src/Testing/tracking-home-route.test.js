import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TrackingHomeRoute from '../Routes/TrackingHomePage/tracking-home-route';
import { BrowserRouter } from 'react-router-dom';
import GrowingContext from '../growing-up-context';
import ReactDOM from 'react-dom';

const contextValue = {
    type: 'feeding',
    currentChild: {
        id: 1,
        age: 3,
        first_name: 'liam',
        eating: [{
            0: {
                id: 1,
                date: '2020-08-09T22:40:23.934Z',
                duration: "00:00:09",
                food_type: "breast_fed",
                id: 1,
                notes: "",
                side_fed: "both"
            }
        }]
    },
    currentChildren: [
        {
            id: 1,
            age: 8,
            first_name: 'liam',
            eating: [{
                0: {
                    id: 1,
                    date: '2020-08-09T22:40:23.934Z',
                    duration: "00:00:09",
                    food_type: "breast_fed",
                    id: 1,
                    notes: "",
                    side_fed: "both"
                }
            }]
        },
    ],
};

const match = {
    params: {
        type: 'feeding',
        childId: '1',
    },
};

test('renders without crashing', () => {
    const { getByText } = render(
        <GrowingContext.Provider value={contextValue}>
            <BrowserRouter>
                <TrackingHomeRoute key={contextValue.currentChild.id} match={match}/>
            </BrowserRouter>
        </GrowingContext.Provider>
    );
    const linkElement = getByText(/Tracker Log/i);
    expect(linkElement).toBeInTheDocument();
});