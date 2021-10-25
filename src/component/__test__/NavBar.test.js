import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';

describe('App component', () => {
  it('Renders the NavBar', () => {
    render(
      <Router>
        <Route>
          <NavBar />
        </Route>
      </Router>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
