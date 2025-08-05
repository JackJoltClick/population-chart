import { render, screen } from '@testing-library/react';
import SimpleBarChart from '../SimpleBarChart';

const mockData = [
  { country: 'China', code: 'CN', population: 1400, year: 2020 },
  { country: 'India', code: 'IN', population: 1380, year: 2020 },
  { country: 'United States', code: 'US', population: 330, year: 2020 },
];

test('renders countries and populations', () => {
  render(<SimpleBarChart data={mockData} />);
  expect(screen.getByText('China')).toBeInTheDocument();
  expect(screen.getByText('1400M')).toBeInTheDocument();
});

test('limits items to maxItems', () => {
  render(<SimpleBarChart data={mockData} maxItems={2} />);
  expect(screen.getByText('China')).toBeInTheDocument();
  expect(screen.getByText('India')).toBeInTheDocument();
  expect(screen.queryByText('United States')).not.toBeInTheDocument();
});

test('handles empty data', () => {
  const { container } = render(<SimpleBarChart data={[]} />);
  expect(container.querySelector('.chart')).toBeInTheDocument();
});