function isIsomorphic(firstString, secondString) {
    for (let i = 0; i < firstString.length; i++) {
        if (firstString.indexOf(firstString[i]) !== secondString.indexOf(secondString[i])) {
            return false;
        }
    }
    return true;
}
let firstString = "aac";
let secondString = "iij";
isIsomorphic(firstString, secondString); 
