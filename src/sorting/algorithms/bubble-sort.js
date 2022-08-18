import {swap} from '../utils/array-utils';
import sleep from '../utils/sleep';

/**
 * The implementation of Bubble Sort
 * @param {Array<Number>} arr array
 * @param {CallableFunction} updateBar callback function
 * @param {Number} delay delay in ms
 */
async function bubbleSort(arr, updateBar, delay){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if (arr[j] > arr[j+1]){                
                swap(arr, j, j+1);
                await updateBar(arr, j, delay);
                await updateBar(arr, j+1, delay);
            };
        };
    };
};

export default bubbleSort;