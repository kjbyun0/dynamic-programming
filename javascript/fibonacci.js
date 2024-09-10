
function fibonacci_iter(num) {
    // type your code here
    let prevValues = [0, 1];
    if (num < 2)
        return num;

    for (let i = 2; i <= num; i++)
        prevValues = [prevValues[1], prevValues[0] + prevValues[1]];

    return prevValues[1];
}

function fibonacci_recur(num, sf=0) {
    if (num < 2) {
        // console.log("stack frames: ", sf);
        return num;
    }

    return fibonacci_recur(num - 2, sf+1) + fibonacci_recur(num - 1, sf+1);
}


function fibonacci_memo(num, memo, sf=0) {
    // console.log("memo: ", memo);
    if (memo[num]) {
        // console.log("stack frames: ", sf);
        return memo[num];
    }

    if (num < 2)
        memo[num] = num;
    else
        memo[num] = fibonacci_memo(num-2, memo, sf+1) + fibonacci_memo(num-1, memo, sf+1);

    // console.log("**stack frames: ", sf);
    return memo[num];
}

function fibonacci(num) {
// type your code here
    // return fibonacci_iter(num);

    // return fibonacci_recur(num);

    const memo = [];
    memo.length = 100;
    return fibonacci_memo(num, memo);
}

if (require.main === module) {
// add your own tests in here
console.log("Expecting: 0");
console.log("=>", fibonacci(0));

console.log("");

console.log("Expecting: 1");
console.log("=>", fibonacci(2));

console.log("");

console.log("Expecting: 55");
console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution