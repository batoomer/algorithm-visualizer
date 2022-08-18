/**
 * Merge Function of the Merge sort
 * @param {Array<Number>} arr 
 * @param {Number} left 
 * @param {Number} middle 
 * @param {Number} right 
 * @param {CallableFunction} updateBar 
 * @param {Number} delay 
 */
async function merge(arr, left, middle, right, updateBar, delay){
        
        let n1 = middle - left + 1;
        let n2 = right - middle;

        let arrLeft = new Array(n1);
        let arrRight = new Array(n2);

        for (let i=0; i< n1; i++){
            arrLeft[i]= arr[left+i];
        };
        for (let j=0; j<n2; j++){
            arrRight[j] = arr[middle+1+j];
        }


        let i= 0;
        let j= 0;
        let k= left;

        while (i<n1 && j<n2){
            if (arrLeft[i]< arrRight[j]){
                arr[k] = arrLeft[i];
                await updateBar(arr,k, delay);
                i++;
            }else{
                arr[k] = arrRight[j];
                await updateBar(arr,k,delay);
                j++;
            };
            k++;
        };

        while (i<n1){
            arr[k] = arrLeft[i];
            await updateBar(arr,k,delay);
            i++;
            k++;
        };

        while (j<n2){
            arr[k] = arrRight[j];
            await updateBar(arr,k,delay);
            j++;
            k++;
        };
};



/**
 * Merge Sort Implementation
 * @param {Array<Number>} arr 
 * @param {Number} left 
 * @param {Number} right 
 * @param {CallableFunction} updateBar 
 * @param {Number} delay 
 */
async function mergeSort(arr, left, right, updateBar, delay){
    if(left < right){
        let middle = Math.floor((left+right)/2);
        await mergeSort(arr, left, middle, updateBar, delay);
        await mergeSort(arr, middle+1, right, updateBar, delay);
        await merge(arr, left, middle, right, updateBar, delay);
    };
};

export default mergeSort;