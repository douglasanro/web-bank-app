import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render correctly', () => {
    render(<App />);
    expect(screen.getByText(/Banco/i)).toBeInTheDocument();
  });
});
