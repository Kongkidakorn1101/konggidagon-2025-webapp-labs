let args = process.argv.slice(2);

if (args.length < 3) {
    console.log("Please enter two numbers");
    process.exit(1);
}

let num1 = Number(args[0]);
let num2 = Number(args[1]);
let operator = args[2];

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter numbers");
    process.exit(1);
}

console.log("✓ add | subtract " + operator);

switch (operator) {
    case "add":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "subtract":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    default:
        console.log("Unknown operator");
}
