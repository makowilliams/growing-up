import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders landing page text', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/The App That GrowsWith Your Family/i);
    expect(linkElement).toBeInTheDocument();
});
