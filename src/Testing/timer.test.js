import React from 'react';
import ReactDOM from 'react-dom';
import Timer from '../Components/timer';
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

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <GrowingContext.Provider value={contextValue}>
            <Timer />
        </GrowingContext.Provider>
        
        , div);
    ReactDOM.unmountComponentAtNode(div);
});
