import { calculateItems } from '../resetCategoriesAndCountDishes.js';

describe('Test de items counter from home screen', () => {
  test('Mock an array of 6 items (dishes) and expect the function to count them (6)', () => {
    const mockArray = [{}, {}, {}, {}, {}, {}];

    expect(calculateItems(mockArray)).toBe(6);
  });

  test('Mock an array of 1 item (dishes) and expect the function to count them (1)', () => {
    const mockArray = [{}];

    expect(calculateItems(mockArray)).toBe(1);
  });

  test('Mock an array of 0 items (dishes) and expect the function to count them (0)', () => {
    const mockArray = [];

    expect(calculateItems(mockArray)).toBe(0);
  });
});
