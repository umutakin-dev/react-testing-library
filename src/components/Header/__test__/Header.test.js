import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders learn react link', () => {
  render(<Header title="My Header" />);
  const linkElement = screen.getByText(/my header/i);
  expect(linkElement).toBeInTheDocument();
});
