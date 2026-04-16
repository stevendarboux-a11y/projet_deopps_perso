import {normalize, dot, add, subtract} from './vector';

describe('normalize', () => {
  it('normalise un vecteur en le ramenant à une longueur de 1', () => {
    expect(normalize({x: 5, y: 50})).toEqual({
      x: 0.09950371902099892,
      y: 0.9950371902099892,
    });
  });
});

describe('dot', () => {
  it('retourne le produit scalaire de deux vecteurs', () => {
    expect(dot({x: 5, y: 50}, {x: 10, y: 100})).toBe(5050);
  });
});

describe('add', () => {
  it('retourne la somme de deux vecteurs', () => {
    expect(add({x: 5, y: 50}, {x: 10, y: 100})).toEqual({x: 15, y: 150});
  });
  it('retourne la somme de deux vecteurs négatifs', () => {
    expect(add({x: -5, y: -50}, {x: -10, y: -100})).toEqual({x: -15, y: -150});
  });
});

describe('subtract', () => {
  it('retourne la différence de deux vecteurs', () => {
    expect(subtract({x: 5, y: 50}, {x: 10, y: 100})).toEqual({x: -5, y: -50});
  });
  it('retourne zero quand les deux vecteurs sont identiques', () => {
    expect(subtract({x: 5, y: 50}, {x: 5, y: 50})).toEqual({x: 0, y: 0});
  });
});
