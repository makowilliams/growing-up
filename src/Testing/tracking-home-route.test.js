import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TrackingHomeRoute from '../Routes/TrackingHomePage/tracking-home-route';
import { MemoryRouter } from 'react-router-dom';

// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(
//         <MemoryRouter>
//             <TrackingHomeRoute match={{ params: {} }} />
//         </MemoryRouter>,
//         div
//     );
//     ReactDOM.unmountComponentAtNode(div);
// });
import GrowingContext from '../growing-up-context';

const contextValue = {
    type: 'feeding',
    currentChild: {
        id: 1,
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

test('renders tracker log', () => {
    const { getByText } = render(
        <GrowingContext.Provider value={contextValue}>
            <TrackingHomeRoute />
        </GrowingContext.Provider>
    
    );
    const linkElement = getByText(/Tracker Log/i);
    expect(linkElement).toBeInTheDocument();
});
