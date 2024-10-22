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
});