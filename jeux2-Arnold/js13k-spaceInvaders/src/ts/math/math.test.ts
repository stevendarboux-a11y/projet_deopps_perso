import {clamp, lerp} from './math';

describe('clamp', () => {
  it('clamp retourne la valeur si elle est dans la plage', () => {
    expect(clamp(1, 10, 2)).toBe(2);
  });
  it('retourne le minimum quand la valeur est trop basse', () => {
    expect(clamp(1, 10, -12)).toBe(1);
  });
  it('retourne le maximum quand la valeur est égale au maximum', () => {
    expect(clamp(1, 10, 10)).toBe(10);
  });
});

describe('lerp', () => {
  it('lerp retourne la valeur si elle est au-delà de end quand v > 1', () => {
    expect(lerp(1, 10, 2)).toBe(19);
  });
  it('retourne la valeur bien avant start quand v est négatif', () => {
    expect(lerp(1, 10, -12)).toBe(-107);
  });
  it('retourne start quand v est égal à 0', () => {
    expect(lerp(1, 10, 0)).toBe(1);
  });
  it('retourne end quand v est égal à 1', () => {
    expect(lerp(1, 10, 1)).toBe(10);
  });
});
