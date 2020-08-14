import React from 'react';
import BabyWeight from '../Components/baby-weight';
import GrowingContext from '../growing-up-context';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const contextValue = {
    child:{
        weight: '19.2'
    }
}

test('renders baby weight', () => {
    const { getByText } = render(
        <GrowingContext.Provider value={contextValue}>
            <BrowserRouter>
                <BabyWeight child={contextValue.child}/>
            </BrowserRouter>
        </GrowingContext.Provider>
    )
    const linkElement = getByText('Weight:');
    expect(linkElement).toBeInTheDocument();
});

// const div = document.createElement('div');
//   ReactDOM.render(<Messages />, div);
//   ReactDOM.unmountComponentAtNode(div);