var stringArray = ["hello world", "good morning", "have a nice day"];

var titleCapsArray = (function(arr) {
    arr.forEach((e, index) => {
        let str = e.split(" ");
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        arr[index] = str.join(" ");
    });
    return arr; 
})(stringArray);

console.log(titleCapsArray);
