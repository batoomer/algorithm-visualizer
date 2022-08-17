

async function partition(arr, left, right, swap, paint, delay){
    let pivot = right;
    let i = (left -1);
    paint(left, 'green');
    paint(right, 'green');
    for (let j = left; j<=right; j++){
        if (arr[j]<arr[pivot]){
            i++;
            await swap(arr, i, j, delay);
            paint(left, 'green');
            paint(right, 'green');
        };
    };

    await swap(arr, i+1, right);
    paint(left, 'aqua');
    paint(right, 'aqua');
    return (i+1);
}



async function quickSort(arr, left, right, swap, paint, delay){
    if(left< right){
        let pivot = await partition(arr, left, right, swap, paint, delay);
        Promise.all([
            await quickSort(arr, left, pivot-1, swap, paint, delay),
            await quickSort(arr, pivot+1, right, swap, paint, delay)
        ]);
    };
};


export default quickSort;