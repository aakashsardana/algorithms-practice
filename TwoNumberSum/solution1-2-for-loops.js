/*
    Using 2 for loops.

    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/

function twoNumberSum(array, targetSum) {
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = i + 1; j < array.length; j++) {
            const currentSum = array[i] + array[j];
            if(currentSum === targetSum) return [array[i], array[j]];
        }
    }
    return [];
} 

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

console.log(twoNumberSum(array, targetSum));