import { render, screen, fireEvent } from '@testing-library/react';
import YearControls from '../YearControls';

const mockOnYearChange = jest.fn();
const mockYears = [2015, 2016, 2017];

test('renders navigation controls', () => {
  render(<YearControls years={mockYears} currentYear={2016} onYearChange={mockOnYearChange} />);
  expect(screen.getByRole('combobox')).toBeInTheDocument();
});

test('calls onYearChange when next clicked', () => {
  const { container } = render(<YearControls years={mockYears} currentYear={2016} onYearChange={mockOnYearChange} />);
  const buttons = container.querySelectorAll('.navButton');
  fireEvent.click(buttons[1]); // Next button is second
  expect(mockOnYearChange).toHaveBeenCalledWith(2017);
});

test('disables previous at first year', () => {
  const { container } = render(<YearControls years={mockYears} currentYear={2015} onYearChange={mockOnYearChange} />);
  const buttons = container.querySelectorAll('.navButton');
  expect(buttons[0]).toBeDisabled(); // Previous button is first
});