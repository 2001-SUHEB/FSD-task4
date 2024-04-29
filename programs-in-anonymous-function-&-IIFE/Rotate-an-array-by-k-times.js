var num = [1, 2, 3, 4, 5];
var k = 2;

var result = (function (arr, k) {

    for (var i = 0; i < k; i++) {
        let init = arr[arr.length - 1];
        for (var j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = init;
    }


    return arr

})(num, k);

console.log(result);