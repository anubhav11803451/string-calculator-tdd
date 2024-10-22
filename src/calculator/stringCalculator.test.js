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

    //From here on extra points for full version of TDD Kata 1 [https://osherove.com/tdd-kata-1]

    //Test-9: Ignore numbers bigger than 1000
    test('should ignore numbers bigger than 1000', () => {
        expect(add("2,1001")).toBe(2);
        // added a filter in the final calculation to ignore numbers > 1000
        // return nums.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
    });

    //Test-10: Handle delimiters of any length
    test('should handle delimiters of any length', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
        // modified the delimiter parsing to handle brackets
        // if (delimiterSection.startsWith("[") && delimiterSection.endsWith("]")) {
        //   delimiter = delimiterSection.slice(1, -1).split("][").map(escapeRegExp).join("|");
        // }
    });

    //Test-11: Handle multiple delimiters
    test('should handle multiple delimiters', () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
        // delimiter parsing now splits multiple delimiters
        // delimiter = delimiterSection.slice(1, -1).split("][").map(escapeRegExp).join("|");
    });

    // Test-12: Handle multiple delimiters with length longer than one char
    test('should handle multiple delimiters with length longer than one char', () => {
        expect(add("//[**][%%]\n1**2%%3")).toBe(6);
        // same logic handles both single and multi-character delimiters
        // We use escapeRegExp to handle special regex characters in delimiters
    });
});