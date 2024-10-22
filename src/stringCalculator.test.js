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

    //Test-5
    test('should handle new lines between numbers', () => {
        expect(add("1\n2\n3\n4\n5,6")).toBe(21);
    });

    //Test-6
    test('should support different delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    //Test-7
    test('should throw an exception for negative numbers', () => {
        expect(() => add("-1,2")).toThrow("negative numbers not allowed: -1");
    });

    //Test-8
    test('should throw an exception for multiple negative numbers', () => {
        expect(() => add("2,-4,3,-5")).toThrow("negative numbers not allowed: -4,-5");
    });
});