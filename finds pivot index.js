var pivotIndex = function(nums) {
    let leftside=0;
    let rightside=nums.reduce((acc,value)=>
        acc+value,0);
    for(let i=0;i<nums.length;i++){
        rightside=rightside-nums[i];
        if(leftside===rightside){
            return i
        }
        leftside =leftside + nums[i]
    }
    return -1
};
let nums=[1,7,3,6,5,6]
console.log(pivotIndex(nums))
