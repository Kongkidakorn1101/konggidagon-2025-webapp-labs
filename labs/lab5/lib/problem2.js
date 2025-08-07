
function readInput() {
    const list = [];
    while (true) {
        let input = prompt("Enter an integer (a negative integer to quit):");
        if (input === null) continue;
        input = input.trim();

        const number = parseInt(input, 10);
        if (isNaN(number)) continue;

        if (number < 0) break;
        if (number > 0) list.push(number);
    }
    return list;
}

function displayStats(list) {
    const avg = list.length > 0
        ? list.reduce((a, b) => a + b, 0) / list.length
        : 0;

    const min = list.length > 0
        ? Math.min(...list)
        : 0;

    const max = list.length > 0
        ? Math.max(...list)
        : 0;
    const numbersText = list.length > 0
        ? list.join(",")
        : "that is empty";

    alert(
        `For the list ${numbersText}, ` + `the average is ${avg.toFixed(2)}, ` + `the minimum is ${min}, ` + `and the maximum is ${max}`
    );
}

const list = readInput();
displayStats(list);
