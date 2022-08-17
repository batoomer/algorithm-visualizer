import bubbleSort from "./algorithms/bubble-sort";
import insertionSort from "./algorithms/insertion-sort";
import selectionSort from "./algorithms/selection-sort";
import quickSort from "./algorithms/quick-sort";

class ArrayBars {
    #arr;
    #array = document.createElement('div');
    
    constructor(arr){
        this.#arr = arr;
        this.#render(arr);
    };

    #render(arr){
        this.#array = document.createElement('div');
        this.#array.classList.add('array-bars');
        this.#array.style.gap = `${(100)/(5*arr.length +99)}%`
        
        for (let i=0; i<arr.length; i++){
            const bar = document.createElement('div');
            bar.classList.add('array-bars--bar');
            bar.setAttribute('data-index', i);
            bar.setAttribute('data-value', arr[i]);

            bar.style.width = `${(100)/(arr.length +19.8)}%`;
            bar.style.height = `${(50*arr[i])/Math.max(...arr)}vh`;
            bar.style.backgroundColor = 'aqua';
            this.#array.appendChild(bar);
        };
    };

    #paintBar(index, color){
        const bar = this.#array.querySelector(`[data-index = "${index}"]`);
        bar.style.backgroundColor= color;
    };

    #sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    #updateBar(arr, index){
        const bar = this.#array.querySelector(`[data-index = "${index}"]`);
        bar.style.height = `${(50*arr[index])/Math.max(...arr)}vh`;
    };

    async #swap(arr, x, y, delay){
        this.#paintBar(x, 'red');
        this.#paintBar(y, 'yellow');
        await this.#sleep(delay);
        this.#paintBar(x, 'aqua');
        this.#paintBar(y, 'aqua');
        
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
       
        this.#updateBar(arr, x);
        this.#updateBar(arr, y);

        this.#paintBar(y, 'red');
        this.#paintBar(x, 'yellow');
        await this.#sleep(delay);
        this.#paintBar(x, 'aqua');
        this.#paintBar(y, 'aqua');
        return arr;
    };

    async sort(sortingAlgorithm, delay){
        switch (sortingAlgorithm){
            case 'selection-sort':
                await selectionSort(this.#arr, this.#swap.bind(this), delay);
            break;
            case 'insertion-sort':
                await insertionSort(this.#arr, this.#swap.bind(this), delay);
                break;
            case 'bubble-sort':
                await bubbleSort(this.#arr, this.#swap.bind(this), delay);
                break;
            case 'quick-sort':
                await quickSort(this.#arr, 0, this.#arr.length -1, this.#swap.bind(this), this.#paintBar.bind(this), delay);
                break;
        };
    };


    getArrayBars(){
        return this.#array;
    };
}

export default ArrayBars;