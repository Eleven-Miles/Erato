import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import TextBlock from '../TextBlock';

test('Render title', () => {
    render(<TextBlock data={{ title: 'test' }} />);

    expect(screen.getByText(/Test/i)).toBeDefined();
});

test('Render content', () => {
    render(<TextBlock data={{ content: 'More testing' }} />);

    expect(screen.getByText(/More testing/i)).toBeDefined();
});
