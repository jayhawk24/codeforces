
var twoSum = function(nums, target) {
    out = []
    for (let i=0 ; i < nums.length ; i++){
        for (let j=i+1 ; j<nums.length ; j++){
            console.log(i,j)
            if (nums[i] + nums[j] === target){
                out.push(i);
                out.push(j);
                return (out);
            }
        }
    }
};
res = twoSum([3,2,4],6);
console.log(res);