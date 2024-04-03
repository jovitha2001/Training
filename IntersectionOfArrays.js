//Intersection of two arrays
function intersection(firstArray,secondArray){
const result = [];
const obj = {};
for (let i = 0; i < firstArray.length; i++) {
    const value = firstArray[i];
    obj[value] = true; 
}
for (let i = 0; i < secondArray.length; i++) {
    const value = secondArray[i];
    if (obj[value]) {
        result.push(value);
    }
}
return result; 
};
const firstArray = [1, 2, 3, 5,3,4];
const secondArray = [1, 2, 3, 5,3, 6];
intersection(firstArray,secondArray);


