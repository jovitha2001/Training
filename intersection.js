//Intersection of two arrays
let nums1=[1,2,3,5,3];
let n=nums1.length;
let m=nums2.length;
let nums2=[2,4,3,3];
let nums3=[];
for(let i=0;i<n;i++){
    for(let j=i;j<m;j++){
        if(nums1[i]==nums2[j]){
            nums3.push(nums1[i]);
        }
    }
}
console.log(nums3);

/*Finding missing elements
let nums=[3,0,1]
nums.sort();
for(let i=1;i<=nums.length;i++){
    if(nums[i]!=i){
        console.log(i);
    }

}*/