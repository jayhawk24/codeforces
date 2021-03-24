var smallerNumbersThanCurrent = function(nums) {
    res = []
    for (let i=0 ; i<nums.length ; i++){
        count = 0
        let j = 0
        while (true){
            if (nums[j] < nums[i]){
                count += 1
                }
            if ( j == nums.length ){
                res.push(count)
                break
            }
            j++
        }
    }
};
smallerNumbersThanCurrent([8,1,2,2,3])