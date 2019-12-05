import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Check if the dashboard is rendering', () => {
    render(<Dashboard />);
})