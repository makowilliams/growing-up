import React from 'react';
import UpdateAge from '../Components/update-age';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GrowingContext from '../growing-up-context';

const contextValue = {
    child: {
        age: '19.2'
    }
}

test('renders baby age', () => {
    const { getByText } = render(
        <GrowingContext.Provider value={contextValue}>
            <BrowserRouter>
                <UpdateAge child={contextValue.child}/>
            </BrowserRouter>
        </GrowingContext.Provider>
    )
    const linkElement = getByText('Age(months)');
    expect(linkElement).toBeInTheDocument();
});