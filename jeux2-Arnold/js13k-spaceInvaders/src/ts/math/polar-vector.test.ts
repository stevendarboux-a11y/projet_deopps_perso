import {distance, toVector} from './polar-vector';

describe('distance', () => {
  it('retourne la distance entre deux vecteurs polaires', () => {
    expect(distance({angle: 5, radius: 50}, {angle: 10, radius: 100})).toBe(
      98.30248290540649,
    );
  });
  it('retourne une distance plus grande avec un angle négatif', () => {
    expect(distance({angle: 5, radius: 50}, {angle: -10, radius: 100})).toBe(
      141.76346189546945,
    );
  });
});

describe('toVector', () => {
  it('convertit un vecteur polaire en vecteur cartésien', () => {
    expect(toVector({angle: 5, radius: 50})).toEqual({
      x: 14.183109273161312,
      y: -47.946213733156924,
    });
  });
});
