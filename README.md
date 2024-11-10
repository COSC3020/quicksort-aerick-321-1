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

When comparing the array to the pivot you get n-1 comparisions. So worst case the pivot has to go through every element you get n + (n-1) +(n-2)+...+ 1 which becomes O(n^2).

Asked chatGTP for tips on how to turn this recursive without code and it gave me the idea to use stacks. Also looked at the code on the slides for help and based some of my code off of that. “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
