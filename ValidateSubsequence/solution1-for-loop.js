/*
    Take a variable that keeps track of the subsequence index. Technique here is to loop through the main array
    and as soon as element of the main array matches the element of the subsequece arary increment the index of
    subsequence array. After the loop the over check if the index of subsequece has reached the length of the 
    subarray. If it has return true else return false.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/

function isValidSubsequence(array, sequence) {
    if (sequence.length > array.length) return false;

    let sequenceIndex = 0;
    for(let i = 0; i < array.length; i++) {
        // Optimization
        if(sequenceIndex === sequence.length) break;
        if(array[i] === sequence[sequenceIndex]) {
            sequenceIndex++;
        }
    }
    return sequenceIndex === subsequece.length;
}

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const subsequece = [1, 6, -1];

console.log(isValidSubsequence(array, subsequece));