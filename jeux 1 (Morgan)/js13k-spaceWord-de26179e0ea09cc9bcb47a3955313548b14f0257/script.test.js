const { getRandomInt, rectIntersect, circleIntersect, timeToString } = require('./script');

describe('Tests unitaires SpaceWord - Annexe', () => {

    test('getRandomInt(-42, 42) < 43 returns true', () => {
        expect(getRandomInt(-42, 42) < 43).toBe(true);
    });

    test('getRandomInt(42, 42) returns 42', () => {
        expect(getRandomInt(42, 42)).toBe(42);
    });

    test('rectIntersect(1,1,2,1,4,1,1,2) returns false', () => {
        expect(rectIntersect(1,1,2,1,4,1,1,2)).toBe(false);
    });

    test('rectIntersect(1,1,5,2,4,1,1,2) returns true', () => {
        expect(rectIntersect(1,1,5,2,4,1,1,2)).toBe(true);
    });

    test('circleIntersect(3,2,1,6,1,1.5) returns false', () => {
        expect(circleIntersect(3,2,1,6,1,1.5)).toBe(false);
    });

    test('circleIntersect(3,2,1,3,-2,4) returns true', () => {
        expect(circleIntersect(3,2,1,3,-2,4)).toBe(true);
    });

    test('timeToString(123456789) returns "17:36:78"', () => {
        expect(timeToString(123456789)).toBe("17:36:78");
    });

    test('timeToString("toto") returns "NaN:NaN:NaN"', () => {
        expect(timeToString("toto")).toBe("NaN:NaN:NaN");
    });

});