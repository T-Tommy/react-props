import { toHex } from '../../src/services/rgb-converter';
import toColorHex from '../../src/services/rgb-converter';

describe('rgb converter', () => {
  it('converts a number into 2 digit hex', () => {
    const input = 15;
    const expected = '0F';
    expect(toHex(input)).toEqual(expected);
  });

  it('converts an rgb object into a 6 digit hex code', () => {
    const input = {
      r: 255,
      g: 0,
      b: 170
    };
    const expected = '#FF00AA';
    expect(toColorHex(input)).toEqual(expected);
  });
});
