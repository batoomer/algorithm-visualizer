import sleep from "./utils/sleep";
import bubbleSort from "./algorithms/bubble-sort";
import insertionSort from "./algorithms/insertion-sort";
import selectionSort from "./algorithms/selection-sort";
import quickSort from "./algorithms/quick-sort";
import mergeSort from "./algorithms/merge-sort";


/**
 * Represent a visualization of an array in the form of vertical bars.
 * The height of each bar represents the value of the corresponding cell.
 */
class ArrayBars {
    // The Array on which the visual is based on
    #arr;
    // The HTLM Node corespondes to the array. (!Bad Naming. TODO: REFRACTOR)
    #array = document.createElement('div');
    
    constructor(arr){
        this.#arr = arr;
        this.#render(arr);
    };

    /**
     * Creates the HTML Structure that represents the array
     * @param {Array} arr 
     */
    #render(arr){
        this.#array = document.createElement('div');
        this.#array.classList.add('array-bars');
        //We have arrLen( array.length) Bars and arrLen-1 (array.length -1) gaps.
        //We want arrLen*barWidth + (arrLen-1)gapWidth = 100% width.
        //We choose to make the bars five time bigger than the gaps: barrWidth = 5*gapWidth.
        //Solving the set of equations gives us: arrWidth = (500/(6*arrLen -1))
        this.#array.style.gap = `${(100)/(6*arr.length -1)}%`
        
        //Iteration for creating the bars that are div elements
        for (let i=0; i<arr.length; i++){
            const bar = document.createElement('div');
            bar.classList.add('array-bars--bar');
            //We use the data attribute to link the div with the actual array
            bar.setAttribute('data-index', i);
            bar.setAttribute('data-value', arr[i]);
            
            //Width from the formula above
            bar.style.width = `${(500)/(6*arr.length -1)}%`;
            //We want the parent to have a fixed height of 60vh
            //For safety reason, we keep a gap of 10vh and,
            //Scale the height of the bars to 0-50vh
            //Formula: (maxHeight)*(value/maxValue)
            bar.style.height = `${(50*arr[i])/Math.max(...arr)}vh`;

            // Hard Coded Color: Aqua
            bar.style.backgroundColor = 'aqua';
            this.#array.appendChild(bar);
        };
    };


    /**
     * Changes the background color of the bar with the given index.
     * @param {Number} index Bar index
     * @param {String} color background color
     */
    #paintBar(index, color){
        const bar = this.#array.querySelector(`[data-index = "${index}"]`);
        bar.style.backgroundColor= color;
    };



    /**
     * Updates the bar on the display, by updating its height according to the
     * new value of the coresponding array cell. Sets the bar background color
     * to red, waits "delay" ms and sets it back to aqua.
     * @param {Array} arr 
     * @param {Number} index 
     * @param {Number} delay 
     */
    async #updateBar(arr, index, delay){
        const bar = this.#array.querySelector(`[data-index = "${index}"]`);
        bar.style.height = `${(50*arr[index])/Math.max(...arr)}vh`;
        this.#paintBar(index, 'red');
        await sleep(delay);
        this.#paintBar(index, 'aqua');
    };

    /**
     * Sorts the array and maps the process to the bars (array visual)
     * @param {String} sortingAlgorithm Sorting Algorithm to apply on the array
     * @param {Number} delay miliseconds to delay
     */
    async sort(sortingAlgorithm, delay){
        switch (sortingAlgorithm){
            case 'selection-sort':
                await selectionSort(this.#arr, this.#updateBar.bind(this), delay);
            break;
            case 'insertion-sort':
                await insertionSort(this.#arr, this.#updateBar.bind(this), delay);
                break;
            case 'bubble-sort':
                await bubbleSort(this.#arr, this.#updateBar.bind(this), delay);
                break;
            case 'merge-sort':
                await mergeSort(this.#arr, 0, this.#arr.length-1, this.#updateBar.bind(this), delay);
                break;
            case 'quick-sort':
                await quickSort(this.#arr, 0, this.#arr.length -1, this.#updateBar.bind(this), this.#paintBar.bind(this), delay);
                break;
        };
    };

    /**
     * Returns the html structure that represents the array visual.
     * @returns the html structure
     */
    getArrayBars(){
        return this.#array;
    };
}

export default ArrayBars;