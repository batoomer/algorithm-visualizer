import { swap } from "../utils/array-utils";
import sleep from "../utils/sleep";



async function partition(arr, left, right, updateBar, paint, delay){
    let pivot = right;
    let i = (left -1);
    paint(left, 'green');
    paint(right, 'green');
    for (let j = left; j<=right; j++){
        if (arr[j]<arr[pivot]){
            i++;
            swap(arr, i, j, delay);
            await updateBar(arr, i, delay);
            await updateBar(arr, j, delay);
            paint(left, 'green');
            paint(right, 'green');
        };
    };

    swap(arr, i+1, right);
    await updateBar(arr, i+1, delay);
    await updateBar(arr, right, delay);
    paint(left, 'aqua');
    paint(right, 'aqua');
    return (i+1);
}



async function quickSort(arr, left, right, updateBar, paint, delay){
    if(left< right){
        let pivot = await partition(arr, left, right, updateBar, paint, delay);
        await quickSort(arr, left, pivot-1, updateBar, paint, delay);
        await quickSort(arr, pivot+1, right, updateBar, paint, delay);
    };
};


export default quickSort;