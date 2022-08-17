async function insertionSort(arr, swap, delay){
    for(let i=1; i<arr.length; i++){
        let j=i;
        while(j>0 && arr[j-1] > arr[j]){
            await swap(arr, j, j-1, delay);
            j--;
        };
    };
};

export default insertionSort;