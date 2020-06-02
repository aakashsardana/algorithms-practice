/*
    Using hashing.
    Here we are picking each number and checking if its counterpart(targetSum - eachNumber) exists in the hash table.
    If it doesn't exist we simply put the number to our hash table with the value of true.
    If counterpart exists we return both the number and the counterpart.

    Time Complexity: O(n)
    Space Complexity: O(n)
*/

function twoNumberSum(array, targetSum) {
    const nums = {};
    for(let firstNum of array) {
        const secondNum = targetSum - firstNum;
        if(nums[secondNum]) return [firstNum, secondNum];
        else nums[firstNum] = true;
    }
    return [];
}

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

console.log(twoNumberSum(array, targetSum));