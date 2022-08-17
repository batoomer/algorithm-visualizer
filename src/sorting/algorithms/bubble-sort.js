async function bubbleSort(arr, swap, delay){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if (arr[j] > arr[j+1]){
                arr = await swap(arr, j, j+1, delay);
            };
        };
    };
};

export default bubbleSort;