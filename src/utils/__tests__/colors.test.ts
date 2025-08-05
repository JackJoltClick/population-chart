import { getCountryColor } from '../colors';

test('returns consistent color for same country code', () => {
  const color1 = getCountryColor('US');
  const color2 = getCountryColor('US');
  expect(color1).toBe(color2);
});

test('returns predefined colors for known countries', () => {
  expect(getCountryColor('US')).toBe('#3498db');
  expect(getCountryColor('CN')).toBe('#e74c3c');
});

test('generates color for unknown country codes', () => {
  const unknownColor = getCountryColor('XX');
  expect(unknownColor).toBeDefined();
  expect(unknownColor).toMatch(/^(#[0-9a-f]{6}|hsl\(.+\))$/i);
});