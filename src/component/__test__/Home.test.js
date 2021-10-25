import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Pages/Home/Home';

describe('Home component', () => {
  it('Renders the Home page', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
  });
});
