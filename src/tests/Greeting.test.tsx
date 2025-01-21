import { render, screen } from '@testing-library/react';
import Greeting from '@/components/Greeting';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Greeting', () => {
  it('renders the greeting text', () => {
    render(<Greeting />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('renders the greeting text with a name', () => {
    render(<Greeting name="John" />);
    expect(screen.getByText('Hello, John!')).toBeInTheDocument();
  });
});
