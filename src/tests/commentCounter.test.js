/**
 * @jest-environment jsdom
 */

import { commentsCount } from '../popUpWindow.js';

describe('SimpleCalculator', () => {
  describe.each([
    [[], 0],
    [[{}], 1],
    [[{}, {}, {}, {}, {}, {}], 6],
  ])("test: input = %p it's expected output: %d comment(s)", (a, expected) => {
    it(`returns ${expected}`, () => {
      expect(commentsCount(a)).toBe(expected);
    });
  });
});
