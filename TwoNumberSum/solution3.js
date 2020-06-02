/*
    Using sorting.
    First we sort the array and take one element on the left most side of the array 
    and other on the right most side of the array. We check if there sum is equal to the
    target sum. If it is we return both the numbers. If the sum is greater than the target sum
    we decrement the right most pointer because we know it is the largest number.
    If the sum is small than the target sum we increment the left most pointer because
    we know that if we increment the left part the next number will be greater than the
    previous number and have probability to match the target sum.
    

    Time Complexity: O(nlog(n))
    Space Complexity: O(1)
*/

function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        const currentSum = array[left] + array[right];
        if(currentSum === targetSum) return [array[left], array[right]];
        else if(currentSum < targetSum) left++;
        else if(currentSum > targetSum) right--;
    }
    return [];
}

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

console.log(twoNumberSum(array, targetSum));