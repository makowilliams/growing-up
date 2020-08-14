import React from 'react';
import AddBaby from '../Components/add-baby';
import GrowingContext from '../growing-up-context';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


const contextValue = {
        child: {
            id: 1,
            first_name: 'liam',
            image: 'https://images.unsplash.com/photo-1578668577946-2f84638d344f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            weight: '19.6',
            age: '9',
            user_id: 1,
        }
};

test('renders new baby', () => {
    const { getByText } = render(
        <GrowingContext.Provider value={contextValue}>
            <BrowserRouter>
                <AddBaby child={contextValue.child}/>
            </BrowserRouter>
        </GrowingContext.Provider>
    )
    const linkElement = getByText('Name');
    expect(linkElement).toBeInTheDocument();
});