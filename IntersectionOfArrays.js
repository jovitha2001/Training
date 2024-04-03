//Intersection of two arrays
const firstArray = [1, 2, 3, 5,3,4];
const secondArray = [1, 2, 3, 5,3, 6];
const result = [];
const obj = {};
for (let i = 0; i < array1.length; i++) {
    const value = array1[i];
    obj[value] = true; 
}
for (let i = 0; i < array2.length; i++) {
    const value = array2[i];
    if (obj[value]) {
        result.push(value);
    }
}
return result; 



