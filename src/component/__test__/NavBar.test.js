import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';

describe('App component', () => {
  render(
    <Router>
      <Route>
        <NavBar />
      </Route>
    </Router>
  );
  it('Renders the NavBar', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('Renders the only the NavBar links ', () => {
    expect(screen.queryByText('About')).not.toBeInTheDocument();
  });
});
