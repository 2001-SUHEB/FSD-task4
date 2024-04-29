const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let fun=() => {
    let ans = 0;
    num.forEach(element => {
        ans += element;
    });
    console.log(ans);
}
fun()

