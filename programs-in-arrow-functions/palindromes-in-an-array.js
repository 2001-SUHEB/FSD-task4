const strings = ["level", "radar", "hello", "madam", "world"];
const palindromes = [];

strings.forEach(e => {
    const str = e.split("");
    const rev = [];
    for (let i = str.length - 1; i >= 0; i--) {
        rev.push(str[i]);
    }
    if (str.join("") === rev.join("")) {
        palindromes.push(e);
    }
});

console.log(palindromes);
