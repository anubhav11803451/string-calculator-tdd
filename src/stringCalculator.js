function add(numbers) {
    //Test-1
    if (numbers === "") return 0;

    //Test-2, Test-3, Test-4 &Test-5
    let delimiter = /[,\n]/;
    let cleanNumbers = numbers;

    //Test-6
    if (numbers.startsWith("//")) {
        // Adding custom delimiter support
        const delimiterEnd = numbers.indexOf("\n");
        const delimiterSection = numbers.slice(2, delimiterEnd);
        // Test-10, Test-11 & Test-12: Handle multiple delimiters of any length
        if (delimiterSection.startsWith("[") && delimiterSection.endsWith("]")) {
            delimiter = delimiterSection.slice(1, -1).split("][").map(escapeRegExp).join("|");
        } else {
            delimiter = escapeRegExp(delimiterSection);
        }
        cleanNumbers = numbers.slice(delimiterEnd + 1);
    }
    // updated this line to split cleanNumbers based custom delimiter, hence it needs to be Regular Expression 
    const nums = cleanNumbers.split(new RegExp(delimiter)).map(Number) // return array of numbers by splitting based on delimiter and convert string to number;
    //Test-7 & Test-8
    const negatives = nums.filter(n => n < 0);

    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(","));
    }
    //Test-9: Ignore numbers bigger than 1000
    return nums.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
}

export { add };

/**
 * Escape special regex characters in a string to be used as a regex delimiter.
 * @description It replaces characters like `.`, `*`, `+`, etc. with their escaped versions, e.g., `\.`.
 * @param {string} string
 * @returns {string}
 */
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}