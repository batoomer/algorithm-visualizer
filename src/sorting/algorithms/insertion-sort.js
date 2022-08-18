import { swap } from "../utils/array-utils";
import sleep from "../utils/sleep";

/**
 * The implementation of insertion sort
 * @param {Array<Number>} arr array
 * @param {CallableFunction} updateBar callback function
 * @param {Number} delay delay in ms
 */
async function insertionSort(arr, updateBar, delay){
    for(let i=1; i<arr.length; i++){
        let j=i;
        while(j>0 && arr[j-1] > arr[j]){
            swap(arr, j, j-1);
            await updateBar(arr, j, delay);
            await updateBar(arr, j-1, delay);
            j--;
        };
    };
};

export default insertionSort;