import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../components/Navbar';

describe('Tests for the Header component', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );
  test('Checks for the logo text', () => {
    expect(screen.getByText('Space Travelers Hub')).toBeTruthy();
  });
  test('check for the rockets link text', () => {
    expect(screen.findByText('Rockets')).toBeTruthy();
  });
  test('check for the missions link text', () => {
    expect(screen.findByText('Missions')).toBeTruthy();
  });

  test('check for the profiles link text', () => {
    expect(screen.findByText('My Profile')).toBeTruthy();
  });
});
