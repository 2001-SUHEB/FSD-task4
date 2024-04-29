var strings = ["level", "radar", "hello", "madam", "world"];

var palindromes = (function(arr) {
    return arr.filter(e => {
        let str = e.split("");
        let rev = [];
        for (let i = str.length - 1; i >= 0; i--) {
            rev.push(str[i]);
        }
        return str.join("") === rev.join("");
    });
})(strings);

console.log(palindromes);
