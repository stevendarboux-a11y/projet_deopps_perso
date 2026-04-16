import {createEnemy, advanceEnemy, getValue, Type} from './enemy';

describe('comportement des ennemis', () => {
  it('un ennemi Basic se rapproche du centre', () => {
    const enemy = createEnemy(Type.Basic, {angle: 0, radius: 500});
    const radiusAvant = enemy.position.radius; // étape 2
    advanceEnemy({enemy, deltaTime: 0.1}); // étape 3
    expect(enemy.position.radius).toBeLessThan(radiusAvant); // étape 4
  });
  it('un enemie spinner change son angle', () => {
    const enemy = createEnemy(Type.Spinner, {angle: 0, radius: 500});
    const angleAvant = enemy.position.angle;
    advanceEnemy({enemy, deltaTime: 0.1});
    expect(enemy.position.angle).not.toBe(angleAvant);
  });
  it('le score correspond au type', () => {
    expect(getValue(Type.Basic)).toBe(5);
    expect(getValue(Type.Spinner)).toBe(10);
    expect(getValue(Type.ZigZag)).toBe(15);
    expect(getValue(Type.Oscillator)).toBe(20);
  });
});
