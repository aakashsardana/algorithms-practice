/*
    Using sorting.
    The problem is same as like TwoNumberSum problem. Here we will be following the sorting
    approach. First we sort the array and then we start to loop through the array.
    For each iteration of i, we will run a while loop and keep track of left and right.
    left initially will be greater than i by 1 and right initially will be the last element of the array.
    So for each iteration of i we will have three numbers to check, numbers at index i, left and right.
    We check if currentSum is equal to targetSum, If it is, we push all the three numbers to the array.
    and increment left and decrement right both by 1. If the currentSum is less than the targetSum we
    increment left by one and if currentSum is greater than the targetSum we decrement the right by 1.

    Note -: Can be solved using three for loops as well but complexity would be more O(n^3)
    But also in this case problem statement says that they should be ordered.

    Time Complexity: O(n^2)
    Space Complexity: O(n)
*/

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);

    const triplets = [];
    for(let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while(left < right) {
            const currentSum = array[i] + array[left] + array[right];
            if(currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                // Now the sum is equal. So we want to increment left and decrement right
                // because the next pair can also be there within the same iteration of i
                left++;
                right--;
            }
            else if (currentSum < targetSum) {
                left++;
            } else if(currentSum > targetSum) {
                right--;
            }
        }       
    }

    return triplets;
}

const array = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

console.log(threeNumberSum(array, targetSum));