function add(numbers) {
    //Test-1
    if (numbers === "") return 0;

    //Test-2, Test-3, Test-4 &Test-5
    let delimiter = /[,\n]/;
    const nums = numbers.split(delimiter).map(Number) // return array of numbers by splitting based on delimiter and convert string to number;
    return nums.reduce((sum, num) => sum + num, 0);
}

export { add };