function quicksort(array) {
    if (array.length < 2){
        return array;
    }
    let stack = [];
    let start = 0;
    let end = array.length -1;
    stack.push(start);
    stack.push(end);
    while(stack.length > 0){
        end = stack.pop();
        start = stack.pop();
        let pivotIn = split(array, start, end);
        if (pivotIn - 1 > start){
            stack.push(start);
            stack.push(pivotIn-1);
        }
        if(pivotIn + 1 < end){
            stack.push(pivotIn+1);
            stack.push(end);
        }
    }
    return array;
}

function split(arr, low, hi) {
    let pivot = arr[low];
    let left = low + 1;
    let right = hi;
    
    while (left <= right) {
        // Move left pointer to the right as long as elements are less than pivot
        while (left <= right && arr[left] < pivot) {
            left++;
        }
        // Move right pointer to the left as long as elements are greater than pivot
        while (left <= right && arr[right] > pivot) {
            right--;
        }
        // If left is still less than right, swap elements at left and right
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    
    // Place pivot in its correct position
    [arr[low], arr[right]] = [arr[right], arr[low]];
    return right;  // Return pivot's final position
}
