(function() {
    var arr1 = [1, 3, 5];
    var arr2 = [2, 4, 6];

    var mergedArray = arr1.concat(arr2).sort((a, b) => a - b);

    var length = mergedArray.length;
    var median = (mergedArray[length/2]+mergedArray[(length/2)-1])/2
    console.log("Median:", median);
})();
