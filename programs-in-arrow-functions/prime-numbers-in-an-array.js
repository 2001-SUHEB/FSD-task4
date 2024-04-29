const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

num.forEach(element => {
    let ans = true;
    for (let i = 2; i <= Math.sqrt(element); i++) {
        if (element % i === 0) {
            ans = false;
            break;
        }
    }
    if (ans && element > 1) {
        console.log(element);
    }
});
