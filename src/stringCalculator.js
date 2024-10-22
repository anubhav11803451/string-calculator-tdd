function add(numbers) {
    //Test-1
    if (numbers === "") return 0;

    //Test-2, Test-3, Test-4 &Test-5
    let delimiter = /[,\n]/;

    //Test-6
    if (numbers.startsWith("//")) {
        // Adding custom delimiter support
        const delimiterEnd = numbers.indexOf("\n");
        delimiter = numbers.substring(2, delimiterEnd);
        numbers = numbers.substring(delimiterEnd + 1);
    }

    const nums = numbers.split(delimiter).map(Number) // return array of numbers by splitting based on delimiter and convert string to number;
    //Test-7 & Test-8
    const negatives = nums.filter(n => n < 0);

    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(","));
    }
    //Test-9: Ignore numbers bigger than 1000
    return nums.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
}

export { add };