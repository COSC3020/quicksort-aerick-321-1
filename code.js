function quicksort(array) {
    if (array.length < 1){
        return array;
    }
    let stack = [];
    let start = 0;
    let end = array.length -1;
    stack.push(start);
    stack.push(end);
    while(stack.length > 0){
        stack.pop(start);
        stack.pop(end);
        let pivotIn = split(array, start, end);
        if (pivotIn - 1 > start){
            stack.push(start, pivotIn-1);
        }
        if(pivotIn + 1 < end){
            stack.push(pivotIn+1, end);
        }

    }
    
    return array;
}

function split(arr, low, hi){
    let pivot, i;
    if (low>=hi) return;
    pivot = low;
    for (i= low +1; i<=hi; i++){
        if(arr[i]<arr[low]){
            arr[low]= arr[i];
        }

    }


}
