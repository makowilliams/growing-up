import React from 'react';
import UpdateWeight from '../Components/update-weight';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GrowingContext from '../growing-up-context';

const contextValue = {
    child: {
        weight: '19.2'
    }
}

test('renders baby weight', () => {
    const { getByText } = render(
        <GrowingContext.Provider value={contextValue}>
            <BrowserRouter>
                <UpdateWeight child={contextValue.child}/>
            </BrowserRouter>
        </GrowingContext.Provider>
    )
    const linkElement = getByText('Weight:');
    expect(linkElement).toBeInTheDocument();
});