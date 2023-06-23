import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'

import App from './App';

describe('<App />', () => {
  it('Should render the heading correctly', () => {
    render(<App />, {wrapper: BrowserRouter});

    const heading = screen.getByRole('heading', { level: 1 });
    expect(screen.getByText('Discover houses')).toBeInTheDocument();
    expect(heading.textContent).toBe('Welcome to hogwarts');
  });
});