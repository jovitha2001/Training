//Intersection of two arrays
let nums1=[1,2,3,5,3];
let nums2=[1,2,3,5];
let n=nums1.length;
let m=nums2.length;
let nums3=[];
for(let i=0;i< n;i++){
    for(let j=i;j< m;j++){
        if(nums1[i]==nums2[j]){
            nums3.push(nums1[i]);
        }
    }
}
console.log(nums3);



