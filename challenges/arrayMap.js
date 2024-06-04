const hasContigueousSum=(arr, target)=>{
    let maxSum=0
    let currentSum=0
    for(let num of arr){
        currentSum+=num
        maxSum=Math.max(currentSum, maxSum)
    }
    return maxSum>target
}

// Testing data
let arr = [4, 2, 7, 1, 9, 5], target = 17 ;
console.log(hasContigueousSum(arr, target))