
function validateInput(input) {
    const number = Number(input);
    return Number.isInteger(number) && number > 0;
}
function findPrimes(limit) {
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}
function displayPrimes(primes, limit) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>For n = ${limit} prime numbers are ${primes.join(', ')}</p>`;
}


label:
while (true) {
    const userInput = prompt("Enter a positive integer");
    if (validateInput(userInput)) {
        const number = parseInt(userInput);
        const primes = findPrimes(number);
        alert(`For n = ${number} prime numbers are ${primes.join(', ')}`);
        break label;
    }
}



