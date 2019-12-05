import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('Check if the display is rendering', () => {
    render(<Display />);
})