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
        start = stack.pop();
        end = stack.pop();
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
