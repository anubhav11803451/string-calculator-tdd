function add(numbers) {
    //Test-1
    if (numbers === "") return 0;

    //Test-2
    // return parseInt(numbers);

    //Test-3 & Test-4
    return numbers.split(',').reduce((sum, num) => sum + parseInt(num), 0);
}

export { add };