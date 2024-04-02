//Finding missing elements
let nums=[0,2,1,3,6,8];
nums.sort();
for(let i=0;i<nums.length-1;i++){
if(nums[i]-nums[i+1] !==-1){
    console.log(nums[i]+1);
}
}
