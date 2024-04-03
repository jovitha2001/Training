//Finding missing elements
const array = [1,0, 2, 4, 3, 6, 8,10];
array.sort();
function missingelement(array){
const obj = {};
for (let j = 0; j < array.length; j++) {
    const element= array[j];
    obj[element] = true;
}
let FindMissing = false;
for (let i = array[0]; i <= array[array.length - 1]; i++) {
    if (!obj[i]) {
        FindMissing = true;
        return i;
    }
}
};
