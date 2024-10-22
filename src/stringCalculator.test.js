import { add } from "./stringCalculator";



describe('String Calculator', () => {
    //Test-1
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    //Test-2
    test('should return the number for a single number', () => {
        expect(add("1")).toBe(1);
    });

    //Test-3
    test('should return the sum of two numbers', () => {
        expect(add("1,5")).toBe(6);
    });

    //Test-4
    test('should return the sum of multiple numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });
});