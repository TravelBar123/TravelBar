import React from 'react'
import {render, cleanup, fireEvent } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

it('should take a snapshot from App', () => {
    const { asFragment } = render(<App />)    
    expect(asFragment(<App />)).toMatchSnapshot()
});

it('should be Selection of Cocktail', () => {
    const { getByTestId } = render(<App />); 
    expect(getByTestId('selection')).toHaveTextContent('Selection of Cocktail')
});

it('increments counter', () => {
    const { getByTestId } = render(<App />);     
    fireEvent.click(getByTestId('btn'))
    expect(getByTestId('selection')).toHaveTextContent('All Cocktails')
});
