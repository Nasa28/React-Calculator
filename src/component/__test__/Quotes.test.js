import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quotes from '../Pages/Quotes/Quotes';

describe('Quotes component', () => {
  it('Renders the Quotes page', () => {
    render(<Quotes />);
    expect(
      screen.getByText(
        'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston'
      )
    ).toBeInTheDocument();
  });
});
