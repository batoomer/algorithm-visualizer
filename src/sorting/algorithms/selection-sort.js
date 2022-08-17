async function selectionSort(arr, swap, delay){
    for(let i=0; i<arr.length; i++){
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;   
            };
        };
        await swap(arr, minIndex, i, delay);
        
    };
};

export default selectionSort;