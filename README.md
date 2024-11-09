# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

function split(arr, low, hi){
    let pivot = arr[low];
    let i = low +1;
    for (let j = low + 1; j<=hi; j++){
        if(arr[j]<pivot){
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
            i++;
        }
    }
    [arr[low], arr[i-1]] = [arr[i-1], arr[low]];
    return i-1;
}

Asked chatGTP for tips on how to turn this recursive without code and it gave me the idea to use stacks. Also looked at the code on the slides for help. “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
