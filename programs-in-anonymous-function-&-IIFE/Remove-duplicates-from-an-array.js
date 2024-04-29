var num = [1, 2, 3, 4, 2, 3, 5, 6, 1];

var unique=(function (arr) {

let ans=new Set(arr);
let res=Array.from(ans);
return res;



})(num);

console.log(unique);