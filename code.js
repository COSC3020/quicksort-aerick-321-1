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
        while (left <= right && arr[left] < pivot) {
            left++;
        }
        while (left <= right && arr[right] > pivot) {
            right--;
        }
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    
    [arr[low], arr[right]] = [arr[right], arr[low]];
    return right; 
}
