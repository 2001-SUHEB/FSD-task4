var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function (arr) {
    arr.forEach(element => {
        if (element % 2 != 0) {
            console.log(element);
        }
    })
})(num);

