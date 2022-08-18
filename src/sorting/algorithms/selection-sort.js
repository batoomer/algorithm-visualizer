import { swap } from "../utils/array-utils";
import sleep from "../utils/sleep";


/**
 * The implementation of selection sort
 * @param {Array<Number>} arr array
 * @param {CallableFunction} updateBar callback function
 * @param {Number} delay delay in ms
 */
async function selectionSort(arr, updateBar, delay){
    for(let i=0; i<arr.length; i++){
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;  
                //array accessed two times in if statement
            };
        };
        swap(arr, minIndex, i);
        await updateBar(arr, minIndex, delay);
        await updateBar(arr, i, delay);
    };
};

export default selectionSort;