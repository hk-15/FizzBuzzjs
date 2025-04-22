function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log("FizzBuzz");
            } else if (i % 7 === 0) {
                console.log("FizzBang");
            } else {
                console.log("Fizz");
            }
        } else if (i % 5 === 0) {
            if (i % 7 === 0) {
                console.log("BuzzBang")
            } else {
                console.log("Buzz")
            }
        } else if (i % 7 === 0) {
            console.log("Bang");
        } else {
            console.log(i);
        }
    }
};

fizzBuzz();