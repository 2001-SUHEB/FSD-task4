var stringArray = ["hello world", "good morning", "have a nice day"];

var titleCapsArray = [];
stringArray.forEach((e, index) => {
    let str = e.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    titleCapsArray.push(str.join(" "));
});

console.log(titleCapsArray);

 