// create a function that multiplies each element in an array by two and returns the first element and the transformed array in another array without mutating the original array

function arr1(num){
    let newArr = [];
    for(let i = 0; i < num.length; i++){
        newArr.push(num[i] * 2);
    }
    
    return [num[0],newArr];
}
