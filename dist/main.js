/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sorting/sorting-view.css":
/*!**************************************!*\
  !*** ./src/sorting/sorting-view.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sorting/algorithms/bubble-sort.js":
/*!***********************************************!*\
  !*** ./src/sorting/algorithms/bubble-sort.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/array-utils */ "./src/sorting/utils/array-utils.js");
/* harmony import */ var _utils_sleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sleep */ "./src/sorting/utils/sleep.js");



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
                (0,_utils_array_utils__WEBPACK_IMPORTED_MODULE_0__.swap)(arr, j, j+1);
                await updateBar(arr, j, delay);
                await updateBar(arr, j+1, delay);
            };
        };
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bubbleSort);

/***/ }),

/***/ "./src/sorting/algorithms/insertion-sort.js":
/*!**************************************************!*\
  !*** ./src/sorting/algorithms/insertion-sort.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/array-utils */ "./src/sorting/utils/array-utils.js");
/* harmony import */ var _utils_sleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sleep */ "./src/sorting/utils/sleep.js");



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
            (0,_utils_array_utils__WEBPACK_IMPORTED_MODULE_0__.swap)(arr, j, j-1);
            await updateBar(arr, j, delay);
            await updateBar(arr, j-1, delay);
            j--;
        };
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insertionSort);

/***/ }),

/***/ "./src/sorting/algorithms/merge-sort.js":
/*!**********************************************!*\
  !*** ./src/sorting/algorithms/merge-sort.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort);

/***/ }),

/***/ "./src/sorting/algorithms/quick-sort.js":
/*!**********************************************!*\
  !*** ./src/sorting/algorithms/quick-sort.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/array-utils */ "./src/sorting/utils/array-utils.js");
/* harmony import */ var _utils_sleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sleep */ "./src/sorting/utils/sleep.js");





async function partition(arr, left, right, updateBar, paint, delay){
    let pivot = right;
    let i = (left -1);
    paint(left, 'green');
    paint(right, 'green');
    for (let j = left; j<=right; j++){
        if (arr[j]<arr[pivot]){
            i++;
            (0,_utils_array_utils__WEBPACK_IMPORTED_MODULE_0__.swap)(arr, i, j, delay);
            await updateBar(arr, i, delay);
            await updateBar(arr, j, delay);
            paint(left, 'green');
            paint(right, 'green');
        };
    };

    (0,_utils_array_utils__WEBPACK_IMPORTED_MODULE_0__.swap)(arr, i+1, right);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quickSort);

/***/ }),

/***/ "./src/sorting/algorithms/selection-sort.js":
/*!**************************************************!*\
  !*** ./src/sorting/algorithms/selection-sort.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/array-utils */ "./src/sorting/utils/array-utils.js");
/* harmony import */ var _utils_sleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sleep */ "./src/sorting/utils/sleep.js");




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
        (0,_utils_array_utils__WEBPACK_IMPORTED_MODULE_0__.swap)(arr, minIndex, i);
        await updateBar(arr, minIndex, delay);
        await updateBar(arr, i, delay);
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectionSort);

/***/ }),

/***/ "./src/sorting/array-bars.js":
/*!***********************************!*\
  !*** ./src/sorting/array-bars.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_sleep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/sleep */ "./src/sorting/utils/sleep.js");
/* harmony import */ var _algorithms_bubble_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithms/bubble-sort */ "./src/sorting/algorithms/bubble-sort.js");
/* harmony import */ var _algorithms_insertion_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithms/insertion-sort */ "./src/sorting/algorithms/insertion-sort.js");
/* harmony import */ var _algorithms_selection_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithms/selection-sort */ "./src/sorting/algorithms/selection-sort.js");
/* harmony import */ var _algorithms_quick_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/quick-sort */ "./src/sorting/algorithms/quick-sort.js");
/* harmony import */ var _algorithms_merge_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithms/merge-sort */ "./src/sorting/algorithms/merge-sort.js");








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
        //We want arrLen*barWidth + (arrLen-1)gapWidth = 95% width.
        //We choose to make the bars five time bigger than the gaps: barrWidth = 5*gapWidth.
        //Solving the set of equations gives us: arrWidth = (500/(6*arrLen -1))
        this.#array.style.gap = `${(95)/(6*arr.length -1)}%`
        
        //Iteration for creating the bars that are div elements
        for (let i=0; i<arr.length; i++){
            const bar = document.createElement('div');
            bar.classList.add('array-bars--bar');
            //We use the data attribute to link the div with the actual array
            bar.setAttribute('data-index', i);
            bar.setAttribute('data-value', arr[i]);
            
            //Width from the formula above
            bar.style.width = `${(5*95)/(6*arr.length -1)}%`;
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
        await (0,_utils_sleep__WEBPACK_IMPORTED_MODULE_0__["default"])(delay);
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
                await (0,_algorithms_selection_sort__WEBPACK_IMPORTED_MODULE_3__["default"])(this.#arr, this.#updateBar.bind(this), delay);
            break;
            case 'insertion-sort':
                await (0,_algorithms_insertion_sort__WEBPACK_IMPORTED_MODULE_2__["default"])(this.#arr, this.#updateBar.bind(this), delay);
                break;
            case 'bubble-sort':
                await (0,_algorithms_bubble_sort__WEBPACK_IMPORTED_MODULE_1__["default"])(this.#arr, this.#updateBar.bind(this), delay);
                break;
            case 'merge-sort':
                await (0,_algorithms_merge_sort__WEBPACK_IMPORTED_MODULE_5__["default"])(this.#arr, 0, this.#arr.length-1, this.#updateBar.bind(this), delay);
                break;
            case 'quick-sort':
                await (0,_algorithms_quick_sort__WEBPACK_IMPORTED_MODULE_4__["default"])(this.#arr, 0, this.#arr.length -1, this.#updateBar.bind(this), this.#paintBar.bind(this), delay);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayBars);

/***/ }),

/***/ "./src/sorting/sorting-view.js":
/*!*************************************!*\
  !*** ./src/sorting/sorting-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sorting_view_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sorting-view.css */ "./src/sorting/sorting-view.css");
/* harmony import */ var _array_bars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-bars */ "./src/sorting/array-bars.js");
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/array-utils */ "./src/sorting/utils/array-utils.js");





/**
 * Represents the sorting page.
 * All elements are nested inside a main element
 */
class SortingView{
    //the html for the page
    #view;
    //controll variable for the array length
    #arraySize = 100;
    //controll variable for the sort algorithm 
    #sortingAlgorithm = 'selection-sort';
    //controll variable for the delay
    #delay = 1;
    //variable that holds the array
    #array;
    //the html for the array visualization
    #arrayBars;

    constructor(){
        //create the view
        this.#render();
        //add the event listeners
        this.#addViewListeners();
        //create the array visualization
        this.#createArrayBars();
    };

    /**
     * Creates the view:
     * - Title
     * - array visual container
     * - controlls
     * - settings display
     */
    #render(){
        this.#view = document.createElement('main');
        this.#view.classList.add('sorting-view');
        this.#view.innerHTML = `
        
        <h2>Sorting Algorithms Visualization</h2>
        
        <div class="array-bars"></div>
        
        <div class='sorting-view--controller'>
            <div>
                <p>New Array</p>
                <button id="sorting-view--controller--new-array">
                    <svg viewBox="0 0 48 48" fill="currentColor">
                        <path d="M9.8 31.45q-1-1.8-1.4-3.625Q8 26 8 24.1q0-6.55 4.725-11.275Q17.45 8.1 24 8.1h2.15l-4-4 1.95-1.95 7.45 7.45-7.45 7.45-2-2 3.95-3.95H24q-5.35 0-9.175 3.825Q11 18.75 11 24.1q0 1.45.275 2.75t.675 2.45ZM23.8 46l-7.45-7.45 7.45-7.45 1.95 1.95-4 4H24q5.35 0 9.175-3.825Q37 29.4 37 24.05q0-1.45-.25-2.75T36 18.85l2.15-2.15q1 1.8 1.425 3.625Q40 22.15 40 24.05q0 6.55-4.725 11.275Q30.55 40.05 24 40.05h-2.25l4 4Z"/>
                    </svg>
                </button>
            </div>

            <div>
                <label for="sorting-view--controller--array-size">Array Size</label>
                <input id="sorting-view--controller--array-size" type="range" min="50" max="1000" value="${this.#arraySize}">
                <small>${this.#arraySize}x${this.#arraySize}</small>
            </div>

            <div>
                <label for="sorting-view--controller--algorithm">Sorting Algorithm</label>
                <select id="sorting-view--controller--algorithm">
                    <option value="selection-sort">Selection Sort</option>
                    <option value="insertion-sort">Insertion Sort</option>
                    <option value="bubble-sort">Bubble Sort</option>
                    <option value="merge-sort">Merge Sort</option>
                    <option value="quick-sort">Quick Sort</option>
                </select>
            </div>

            <div>
                <label for="sorting-view--controller--delay">Delay</label>
                <select id="sorting-view--controller--delay">
                    <option value="1">0</option>
                    <option value="10">1</option>
                    <option value="20">2</option>
                    <option value="30">3</option>
                    <option value="40">4</option>
                    <option value="50">5</option>
                </select>
            </div>

            <div>
                <p>Start</p>
                <button id="sorting-view--controller--start">
                    <svg viewBox="0 0 48 48" fill="currentColor">
                        <path d="M16.5 31.5h3v-15h-3Zm8-.45L35.1 24l-10.6-7.05ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/>
                    </svg>
                </button>
            </div>
            
        </div>

        <div class = "sorting-view--settings-info">
            <p>Current Settings:</p>
            <small class= "sorting-view--settings-info--size" >Array Size: <span>${this.#arraySize}</span></small>
            <small class= "sorting-view--settings-info--algorithm" >Sorting Algorithm: <span>${this.#sortingAlgorithm}</span></small>
            <small class= "sorting-view--settings-info--delay" >Delay: <span>${this.#delay}</span></small>
        </div>
        `;
    };

    /**
     * creates a new random array and updates the array visual
     */
    #createArrayBars(){
        this.#array = (0,_utils_array_utils__WEBPACK_IMPORTED_MODULE_2__.createNewArray)(this.#arraySize);
        this.#updateArrayBars()
    };

    /**
     * Creates a new array visual and replaces it with the old one on the view
     */
    #updateArrayBars(){
        this.#arrayBars = new _array_bars__WEBPACK_IMPORTED_MODULE_1__["default"](this.#array, this.#sortingAlgorithm, this.#delay);
        this.#view.querySelector('.array-bars').replaceWith(this.#arrayBars.getArrayBars());
    };

    /**
     * Event Listener for the array size slider. Updates the text of the array size slider that is
     * displayed in a small elemenet.
     * @param {Event} event 
     */
    #updateArraySizeInputText(event){
        this.#view.querySelector('#sorting-view--controller--array-size + small').textContent=event.target.value;
    };

    /**
     * Event Listener for the array size slider. Updates the text of the array size slider and the settings
     * display. Sets the array size property to the new selected value and creates a new array visual.
     * @param {Event} event 
     */
    #updateArraySize(event){
        this.#updateArraySizeInputText(event);
        this.#view.querySelector('.sorting-view--settings-info--size > span').textContent = event.target.value;
        this.#arraySize = event.target.value;
        this.#createArrayBars();
    };


    /**
     * Event Listener for the sorting algorithm selection. Updates the settings display
     * and sets the sorting algorithm property to the selected new value.
     * @param {Event} event 
     */
    #updateSortAlgorithm(event){
        this.#view.querySelector('.sorting-view--settings-info--algorithm > span').textContent = event.target.value;
        this.#sortingAlgorithm = event.target.value;
    };

    /**
     * Event Listener for the delay selection. Updates the settings display text and
     * sets the delay property to the new selected value.
     * @param {Event} event 
     */
    #updateSortDelay(event){
        this.#view.querySelector('.sorting-view--settings-info--delay > span').textContent = event.target.value;
        this.#delay = event.target.value;
    };

    /**
     * Event Listener for the Start Button. Disables all the controllers (we do not want to make changes
     * while the algorithm is runnin). Starts the sortings algorithm. When it finishes re enables the controllers.
     * @param {Event} event 
     */
    async #startSort(event){
        let arrayNewButton= this.#view.querySelector('#sorting-view--controller--new-array');
        let arraySizeInput = this.#view.querySelector('#sorting-view--controller--array-size');
        let arraySortAlgorithm = this.#view.querySelector('#sorting-view--controller--algorithm');
        let arraySortDelay = this.#view.querySelector('#sorting-view--controller--delay');
        
        arrayNewButton.disabled = true;
        arraySizeInput.disabled = true;
        arraySortAlgorithm.disabled = true;
        arraySortDelay.disabled = true;

        await this.#arrayBars.sort(this.#sortingAlgorithm, this.#delay);

        arrayNewButton.disabled = false;
        arraySizeInput.disabled = false;
        arraySortAlgorithm.disabled = false;
        arraySortDelay.disabled = false;
    };

    /**
     * Adds the event listeners for the elements of the view
     */
    #addViewListeners(){
        let arrayNewButton= this.#view.querySelector('#sorting-view--controller--new-array');
        arrayNewButton.addEventListener('click', this.#createArrayBars.bind(this));

        let arraySizeInput = this.#view.querySelector('#sorting-view--controller--array-size');
        arraySizeInput.addEventListener('input', this.#updateArraySizeInputText.bind(this));
        arraySizeInput.addEventListener('change', this.#updateArraySize.bind(this));

        let arraySortAlgorithm = this.#view.querySelector('#sorting-view--controller--algorithm');
        arraySortAlgorithm.addEventListener('change', this.#updateSortAlgorithm.bind(this));

        let arraySortDelay = this.#view.querySelector('#sorting-view--controller--delay');
        arraySortDelay.addEventListener('change', this.#updateSortDelay.bind(this));

        let arrayStartButton = this.#view.querySelector('#sorting-view--controller--start');
        arrayStartButton.addEventListener('click', this.#startSort.bind(this));
    };

    /**
     * Removes all event listeners that were added to the view. Finally removes the
     * view from the DOM.
     */
    deleteView(){
        let arrayNewButton= this.#view.querySelector('#sorting-view--controller--new-array');
        arrayNewButton.removeEventListener('click', this.#createArrayBars);

        let arraySizeInput = this.#view.querySelector('#sorting-view--controller--array-size');
        arraySizeInput.removeEventListener('input', this.#updateArraySizeInputText.bind(this));
        arraySizeInput.removeEventListener('change', this.#updateArraySize.bind(this));

        let arraySortAlgorithm = this.#view.querySelector('#sorting-view--controller--algorithm');
        arraySortAlgorithm.removeEventListener('change', this.#updateSortAlgorithm.bind(this));

        let arraySortDelay = this.#view.querySelector('#sorting-view--controller--delay');
        arraySortDelay.removeEventListener('change', this.#updateSortDelay.bind(this));

        let arrayStartButton = this.#view.querySelector('#sorting-view--controller--start');
        arrayStartButton.removeEventListener('click', this.#startSort.bind(this));

        this.#view.remove();
    };

    /**
     * Returns the view property of the class which represents a dom node.
     * @returns the view
     */
    getView(){
        return this.#view;
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortingView);


/***/ }),

/***/ "./src/sorting/utils/array-utils.js":
/*!******************************************!*\
  !*** ./src/sorting/utils/array-utils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewArray": () => (/* binding */ createNewArray),
/* harmony export */   "swap": () => (/* binding */ swap)
/* harmony export */ });
/**
* Swaps the values of index x and index y of an array.     
* @param {Array} arr array
* @param {Number} x index of array
* @param {Number} y index of array
* @returns the array
 */
function swap(arr, x, y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
};

/**
 * Returns a random Integer number in the range [min,max].
 * @param {Number} min minimum number
 * @param {Number} max maximum number
 * @returns random Integer [min,max]
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};

/**
 * Creates a new array filled with random integers.
 * @param {Number} lenght lenght of the array
 * @returns random integers array
 */
function createNewArray(lenght){
    let array= new Array(lenght);
    for(let i=0; i<lenght; i++){
        array[i] = getRandomInt(10, 1000);
    };
     return array;
};




/***/ }),

/***/ "./src/sorting/utils/sleep.js":
/*!************************************!*\
  !*** ./src/sorting/utils/sleep.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
* Source: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
* Utility Function for inserting a delay to a function.
* async/await
* @param {Number} ms miliseconds to sleep
* @returns Promise
*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sleep);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sorting_sorting_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sorting/sorting-view */ "./src/sorting/sorting-view.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/global.css */ "./src/styles/global.css");




let main = document.querySelector('main');

main.replaceWith(new _sorting_sorting_view__WEBPACK_IMPORTED_MODULE_0__["default"]().getView());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25QM0I7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQixVQUFVLFFBQVE7QUFDbEIsVUFBVSxRQUFRO0FBQ2xCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ087QUFDUDtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsUUFBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUs7Ozs7OztVQ1hwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNwQjs7O0FBRzdCOztBQUVBLHFCQUFxQiw2REFBVyxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxnb3JpdGhtLXZpc3VhbGl6ZXIvLi9zcmMvc29ydGluZy9zb3J0aW5nLXZpZXcuY3NzPzY5NTEiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtLXZpc3VhbGl6ZXIvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3M/MGU3OSIsIndlYnBhY2s6Ly9hbGdvcml0aG0tdmlzdWFsaXplci8uL3NyYy9zb3J0aW5nL2FsZ29yaXRobXMvYnViYmxlLXNvcnQuanMiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtLXZpc3VhbGl6ZXIvLi9zcmMvc29ydGluZy9hbGdvcml0aG1zL2luc2VydGlvbi1zb3J0LmpzIiwid2VicGFjazovL2FsZ29yaXRobS12aXN1YWxpemVyLy4vc3JjL3NvcnRpbmcvYWxnb3JpdGhtcy9tZXJnZS1zb3J0LmpzIiwid2VicGFjazovL2FsZ29yaXRobS12aXN1YWxpemVyLy4vc3JjL3NvcnRpbmcvYWxnb3JpdGhtcy9xdWljay1zb3J0LmpzIiwid2VicGFjazovL2FsZ29yaXRobS12aXN1YWxpemVyLy4vc3JjL3NvcnRpbmcvYWxnb3JpdGhtcy9zZWxlY3Rpb24tc29ydC5qcyIsIndlYnBhY2s6Ly9hbGdvcml0aG0tdmlzdWFsaXplci8uL3NyYy9zb3J0aW5nL2FycmF5LWJhcnMuanMiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtLXZpc3VhbGl6ZXIvLi9zcmMvc29ydGluZy9zb3J0aW5nLXZpZXcuanMiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtLXZpc3VhbGl6ZXIvLi9zcmMvc29ydGluZy91dGlscy9hcnJheS11dGlscy5qcyIsIndlYnBhY2s6Ly9hbGdvcml0aG0tdmlzdWFsaXplci8uL3NyYy9zb3J0aW5nL3V0aWxzL3NsZWVwLmpzIiwid2VicGFjazovL2FsZ29yaXRobS12aXN1YWxpemVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FsZ29yaXRobS12aXN1YWxpemVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hbGdvcml0aG0tdmlzdWFsaXplci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FsZ29yaXRobS12aXN1YWxpemVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWxnb3JpdGhtLXZpc3VhbGl6ZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHtzd2FwfSBmcm9tICcuLi91dGlscy9hcnJheS11dGlscyc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi4vdXRpbHMvc2xlZXAnO1xuXG4vKipcbiAqIFRoZSBpbXBsZW1lbnRhdGlvbiBvZiBCdWJibGUgU29ydFxuICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBhcnIgYXJyYXlcbiAqIEBwYXJhbSB7Q2FsbGFibGVGdW5jdGlvbn0gdXBkYXRlQmFyIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgZGVsYXkgaW4gbXNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gYnViYmxlU29ydChhcnIsIHVwZGF0ZUJhciwgZGVsYXkpe1xuICAgIGZvcihsZXQgaT0wOyBpPGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPGFyci5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZiAoYXJyW2pdID4gYXJyW2orMV0peyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzd2FwKGFyciwgaiwgaisxKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB1cGRhdGVCYXIoYXJyLCBqLCBkZWxheSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlQmFyKGFyciwgaisxLCBkZWxheSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWJibGVTb3J0OyIsImltcG9ydCB7IHN3YXAgfSBmcm9tIFwiLi4vdXRpbHMvYXJyYXktdXRpbHNcIjtcbmltcG9ydCBzbGVlcCBmcm9tIFwiLi4vdXRpbHMvc2xlZXBcIjtcblxuLyoqXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgaW5zZXJ0aW9uIHNvcnRcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gYXJyIGFycmF5XG4gKiBAcGFyYW0ge0NhbGxhYmxlRnVuY3Rpb259IHVwZGF0ZUJhciBjYWxsYmFjayBmdW5jdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5IGRlbGF5IGluIG1zXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluc2VydGlvblNvcnQoYXJyLCB1cGRhdGVCYXIsIGRlbGF5KXtcbiAgICBmb3IobGV0IGk9MTsgaTxhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgaj1pO1xuICAgICAgICB3aGlsZShqPjAgJiYgYXJyW2otMV0gPiBhcnJbal0pe1xuICAgICAgICAgICAgc3dhcChhcnIsIGosIGotMSk7XG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVCYXIoYXJyLCBqLCBkZWxheSk7XG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVCYXIoYXJyLCBqLTEsIGRlbGF5KTtcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zZXJ0aW9uU29ydDsiLCIvKipcbiAqIE1lcmdlIEZ1bmN0aW9uIG9mIHRoZSBNZXJnZSBzb3J0XG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IGFyciBcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IFxuICogQHBhcmFtIHtOdW1iZXJ9IG1pZGRsZSBcbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBcbiAqIEBwYXJhbSB7Q2FsbGFibGVGdW5jdGlvbn0gdXBkYXRlQmFyIFxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5IFxuICovXG5hc3luYyBmdW5jdGlvbiBtZXJnZShhcnIsIGxlZnQsIG1pZGRsZSwgcmlnaHQsIHVwZGF0ZUJhciwgZGVsYXkpe1xuICAgICAgICBcbiAgICAgICAgbGV0IG4xID0gbWlkZGxlIC0gbGVmdCArIDE7XG4gICAgICAgIGxldCBuMiA9IHJpZ2h0IC0gbWlkZGxlO1xuXG4gICAgICAgIGxldCBhcnJMZWZ0ID0gbmV3IEFycmF5KG4xKTtcbiAgICAgICAgbGV0IGFyclJpZ2h0ID0gbmV3IEFycmF5KG4yKTtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IG4xOyBpKyspe1xuICAgICAgICAgICAgYXJyTGVmdFtpXT0gYXJyW2xlZnQraV07XG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGo9MDsgajxuMjsgaisrKXtcbiAgICAgICAgICAgIGFyclJpZ2h0W2pdID0gYXJyW21pZGRsZSsxK2pdO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgaT0gMDtcbiAgICAgICAgbGV0IGo9IDA7XG4gICAgICAgIGxldCBrPSBsZWZ0O1xuXG4gICAgICAgIHdoaWxlIChpPG4xICYmIGo8bjIpe1xuICAgICAgICAgICAgaWYgKGFyckxlZnRbaV08IGFyclJpZ2h0W2pdKXtcbiAgICAgICAgICAgICAgICBhcnJba10gPSBhcnJMZWZ0W2ldO1xuICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZUJhcihhcnIsaywgZGVsYXkpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGFycltrXSA9IGFyclJpZ2h0W2pdO1xuICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZUJhcihhcnIsayxkZWxheSk7XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGsrKztcbiAgICAgICAgfTtcblxuICAgICAgICB3aGlsZSAoaTxuMSl7XG4gICAgICAgICAgICBhcnJba10gPSBhcnJMZWZ0W2ldO1xuICAgICAgICAgICAgYXdhaXQgdXBkYXRlQmFyKGFycixrLGRlbGF5KTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGsrKztcbiAgICAgICAgfTtcblxuICAgICAgICB3aGlsZSAoajxuMil7XG4gICAgICAgICAgICBhcnJba10gPSBhcnJSaWdodFtqXTtcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZUJhcihhcnIsayxkZWxheSk7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBrKys7XG4gICAgICAgIH07XG59O1xuXG5cblxuLyoqXG4gKiBNZXJnZSBTb3J0IEltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IGFyciBcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IFxuICogQHBhcmFtIHtOdW1iZXJ9IHJpZ2h0IFxuICogQHBhcmFtIHtDYWxsYWJsZUZ1bmN0aW9ufSB1cGRhdGVCYXIgXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG1lcmdlU29ydChhcnIsIGxlZnQsIHJpZ2h0LCB1cGRhdGVCYXIsIGRlbGF5KXtcbiAgICBpZihsZWZ0IDwgcmlnaHQpe1xuICAgICAgICBsZXQgbWlkZGxlID0gTWF0aC5mbG9vcigobGVmdCtyaWdodCkvMik7XG4gICAgICAgIGF3YWl0IG1lcmdlU29ydChhcnIsIGxlZnQsIG1pZGRsZSwgdXBkYXRlQmFyLCBkZWxheSk7XG4gICAgICAgIGF3YWl0IG1lcmdlU29ydChhcnIsIG1pZGRsZSsxLCByaWdodCwgdXBkYXRlQmFyLCBkZWxheSk7XG4gICAgICAgIGF3YWl0IG1lcmdlKGFyciwgbGVmdCwgbWlkZGxlLCByaWdodCwgdXBkYXRlQmFyLCBkZWxheSk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlU29ydDsiLCJpbXBvcnQgeyBzd2FwIH0gZnJvbSBcIi4uL3V0aWxzL2FycmF5LXV0aWxzXCI7XG5pbXBvcnQgc2xlZXAgZnJvbSBcIi4uL3V0aWxzL3NsZWVwXCI7XG5cblxuXG5hc3luYyBmdW5jdGlvbiBwYXJ0aXRpb24oYXJyLCBsZWZ0LCByaWdodCwgdXBkYXRlQmFyLCBwYWludCwgZGVsYXkpe1xuICAgIGxldCBwaXZvdCA9IHJpZ2h0O1xuICAgIGxldCBpID0gKGxlZnQgLTEpO1xuICAgIHBhaW50KGxlZnQsICdncmVlbicpO1xuICAgIHBhaW50KHJpZ2h0LCAnZ3JlZW4nKTtcbiAgICBmb3IgKGxldCBqID0gbGVmdDsgajw9cmlnaHQ7IGorKyl7XG4gICAgICAgIGlmIChhcnJbal08YXJyW3Bpdm90XSl7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBzd2FwKGFyciwgaSwgaiwgZGVsYXkpO1xuICAgICAgICAgICAgYXdhaXQgdXBkYXRlQmFyKGFyciwgaSwgZGVsYXkpO1xuICAgICAgICAgICAgYXdhaXQgdXBkYXRlQmFyKGFyciwgaiwgZGVsYXkpO1xuICAgICAgICAgICAgcGFpbnQobGVmdCwgJ2dyZWVuJyk7XG4gICAgICAgICAgICBwYWludChyaWdodCwgJ2dyZWVuJyk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHN3YXAoYXJyLCBpKzEsIHJpZ2h0KTtcbiAgICBhd2FpdCB1cGRhdGVCYXIoYXJyLCBpKzEsIGRlbGF5KTtcbiAgICBhd2FpdCB1cGRhdGVCYXIoYXJyLCByaWdodCwgZGVsYXkpO1xuICAgIHBhaW50KGxlZnQsICdhcXVhJyk7XG4gICAgcGFpbnQocmlnaHQsICdhcXVhJyk7XG4gICAgcmV0dXJuIChpKzEpO1xufVxuXG5cblxuYXN5bmMgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgbGVmdCwgcmlnaHQsIHVwZGF0ZUJhciwgcGFpbnQsIGRlbGF5KXtcbiAgICBpZihsZWZ0PCByaWdodCl7XG4gICAgICAgIGxldCBwaXZvdCA9IGF3YWl0IHBhcnRpdGlvbihhcnIsIGxlZnQsIHJpZ2h0LCB1cGRhdGVCYXIsIHBhaW50LCBkZWxheSk7XG4gICAgICAgIGF3YWl0IHF1aWNrU29ydChhcnIsIGxlZnQsIHBpdm90LTEsIHVwZGF0ZUJhciwgcGFpbnQsIGRlbGF5KTtcbiAgICAgICAgYXdhaXQgcXVpY2tTb3J0KGFyciwgcGl2b3QrMSwgcmlnaHQsIHVwZGF0ZUJhciwgcGFpbnQsIGRlbGF5KTtcbiAgICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBxdWlja1NvcnQ7IiwiaW1wb3J0IHsgc3dhcCB9IGZyb20gXCIuLi91dGlscy9hcnJheS11dGlsc1wiO1xuaW1wb3J0IHNsZWVwIGZyb20gXCIuLi91dGlscy9zbGVlcFwiO1xuXG5cbi8qKlxuICogVGhlIGltcGxlbWVudGF0aW9uIG9mIHNlbGVjdGlvbiBzb3J0XG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IGFyciBhcnJheVxuICogQHBhcmFtIHtDYWxsYWJsZUZ1bmN0aW9ufSB1cGRhdGVCYXIgY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheSBkZWxheSBpbiBtc1xuICovXG5hc3luYyBmdW5jdGlvbiBzZWxlY3Rpb25Tb3J0KGFyciwgdXBkYXRlQmFyLCBkZWxheSl7XG4gICAgZm9yKGxldCBpPTA7IGk8YXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IG1pbkluZGV4ID0gaTtcbiAgICAgICAgZm9yKGxldCBqPWkrMTsgajxhcnIubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgaWYgKGFycltqXSA8IGFyclttaW5JbmRleF0pe1xuICAgICAgICAgICAgICAgIG1pbkluZGV4ID0gajsgIFxuICAgICAgICAgICAgICAgIC8vYXJyYXkgYWNjZXNzZWQgdHdvIHRpbWVzIGluIGlmIHN0YXRlbWVudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgc3dhcChhcnIsIG1pbkluZGV4LCBpKTtcbiAgICAgICAgYXdhaXQgdXBkYXRlQmFyKGFyciwgbWluSW5kZXgsIGRlbGF5KTtcbiAgICAgICAgYXdhaXQgdXBkYXRlQmFyKGFyciwgaSwgZGVsYXkpO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb25Tb3J0OyIsImltcG9ydCBzbGVlcCBmcm9tIFwiLi91dGlscy9zbGVlcFwiO1xuaW1wb3J0IGJ1YmJsZVNvcnQgZnJvbSBcIi4vYWxnb3JpdGhtcy9idWJibGUtc29ydFwiO1xuaW1wb3J0IGluc2VydGlvblNvcnQgZnJvbSBcIi4vYWxnb3JpdGhtcy9pbnNlcnRpb24tc29ydFwiO1xuaW1wb3J0IHNlbGVjdGlvblNvcnQgZnJvbSBcIi4vYWxnb3JpdGhtcy9zZWxlY3Rpb24tc29ydFwiO1xuaW1wb3J0IHF1aWNrU29ydCBmcm9tIFwiLi9hbGdvcml0aG1zL3F1aWNrLXNvcnRcIjtcbmltcG9ydCBtZXJnZVNvcnQgZnJvbSBcIi4vYWxnb3JpdGhtcy9tZXJnZS1zb3J0XCI7XG5cblxuLyoqXG4gKiBSZXByZXNlbnQgYSB2aXN1YWxpemF0aW9uIG9mIGFuIGFycmF5IGluIHRoZSBmb3JtIG9mIHZlcnRpY2FsIGJhcnMuXG4gKiBUaGUgaGVpZ2h0IG9mIGVhY2ggYmFyIHJlcHJlc2VudHMgdGhlIHZhbHVlIG9mIHRoZSBjb3JyZXNwb25kaW5nIGNlbGwuXG4gKi9cbmNsYXNzIEFycmF5QmFycyB7XG4gICAgLy8gVGhlIEFycmF5IG9uIHdoaWNoIHRoZSB2aXN1YWwgaXMgYmFzZWQgb25cbiAgICAjYXJyO1xuICAgIC8vIFRoZSBIVExNIE5vZGUgY29yZXNwb25kZXMgdG8gdGhlIGFycmF5LiAoIUJhZCBOYW1pbmcuIFRPRE86IFJFRlJBQ1RPUilcbiAgICAjYXJyYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihhcnIpe1xuICAgICAgICB0aGlzLiNhcnIgPSBhcnI7XG4gICAgICAgIHRoaXMuI3JlbmRlcihhcnIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBIVE1MIFN0cnVjdHVyZSB0aGF0IHJlcHJlc2VudHMgdGhlIGFycmF5XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyIFxuICAgICAqL1xuICAgICNyZW5kZXIoYXJyKXtcbiAgICAgICAgdGhpcy4jYXJyYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy4jYXJyYXkuY2xhc3NMaXN0LmFkZCgnYXJyYXktYmFycycpO1xuICAgICAgICAvL1dlIGhhdmUgYXJyTGVuKCBhcnJheS5sZW5ndGgpIEJhcnMgYW5kIGFyckxlbi0xIChhcnJheS5sZW5ndGggLTEpIGdhcHMuXG4gICAgICAgIC8vV2Ugd2FudCBhcnJMZW4qYmFyV2lkdGggKyAoYXJyTGVuLTEpZ2FwV2lkdGggPSA5NSUgd2lkdGguXG4gICAgICAgIC8vV2UgY2hvb3NlIHRvIG1ha2UgdGhlIGJhcnMgZml2ZSB0aW1lIGJpZ2dlciB0aGFuIHRoZSBnYXBzOiBiYXJyV2lkdGggPSA1KmdhcFdpZHRoLlxuICAgICAgICAvL1NvbHZpbmcgdGhlIHNldCBvZiBlcXVhdGlvbnMgZ2l2ZXMgdXM6IGFycldpZHRoID0gKDUwMC8oNiphcnJMZW4gLTEpKVxuICAgICAgICB0aGlzLiNhcnJheS5zdHlsZS5nYXAgPSBgJHsoOTUpLyg2KmFyci5sZW5ndGggLTEpfSVgXG4gICAgICAgIFxuICAgICAgICAvL0l0ZXJhdGlvbiBmb3IgY3JlYXRpbmcgdGhlIGJhcnMgdGhhdCBhcmUgZGl2IGVsZW1lbnRzXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCgnYXJyYXktYmFycy0tYmFyJyk7XG4gICAgICAgICAgICAvL1dlIHVzZSB0aGUgZGF0YSBhdHRyaWJ1dGUgdG8gbGluayB0aGUgZGl2IHdpdGggdGhlIGFjdHVhbCBhcnJheVxuICAgICAgICAgICAgYmFyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuICAgICAgICAgICAgYmFyLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGFycltpXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vV2lkdGggZnJvbSB0aGUgZm9ybXVsYSBhYm92ZVxuICAgICAgICAgICAgYmFyLnN0eWxlLndpZHRoID0gYCR7KDUqOTUpLyg2KmFyci5sZW5ndGggLTEpfSVgO1xuICAgICAgICAgICAgLy9XZSB3YW50IHRoZSBwYXJlbnQgdG8gaGF2ZSBhIGZpeGVkIGhlaWdodCBvZiA2MHZoXG4gICAgICAgICAgICAvL0ZvciBzYWZldHkgcmVhc29uLCB3ZSBrZWVwIGEgZ2FwIG9mIDEwdmggYW5kLFxuICAgICAgICAgICAgLy9TY2FsZSB0aGUgaGVpZ2h0IG9mIHRoZSBiYXJzIHRvIDAtNTB2aFxuICAgICAgICAgICAgLy9Gb3JtdWxhOiAobWF4SGVpZ2h0KSoodmFsdWUvbWF4VmFsdWUpXG4gICAgICAgICAgICBiYXIuc3R5bGUuaGVpZ2h0ID0gYCR7KDUwKmFycltpXSkvTWF0aC5tYXgoLi4uYXJyKX12aGA7XG5cbiAgICAgICAgICAgIC8vIEhhcmQgQ29kZWQgQ29sb3I6IEFxdWFcbiAgICAgICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYXF1YSc7XG4gICAgICAgICAgICB0aGlzLiNhcnJheS5hcHBlbmRDaGlsZChiYXIpO1xuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGJhciB3aXRoIHRoZSBnaXZlbiBpbmRleC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggQmFyIGluZGV4XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIGJhY2tncm91bmQgY29sb3JcbiAgICAgKi9cbiAgICAjcGFpbnRCYXIoaW5kZXgsIGNvbG9yKXtcbiAgICAgICAgY29uc3QgYmFyID0gdGhpcy4jYXJyYXkucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXggPSBcIiR7aW5kZXh9XCJdYCk7XG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IGNvbG9yO1xuICAgIH07XG5cblxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgYmFyIG9uIHRoZSBkaXNwbGF5LCBieSB1cGRhdGluZyBpdHMgaGVpZ2h0IGFjY29yZGluZyB0byB0aGVcbiAgICAgKiBuZXcgdmFsdWUgb2YgdGhlIGNvcmVzcG9uZGluZyBhcnJheSBjZWxsLiBTZXRzIHRoZSBiYXIgYmFja2dyb3VuZCBjb2xvclxuICAgICAqIHRvIHJlZCwgd2FpdHMgXCJkZWxheVwiIG1zIGFuZCBzZXRzIGl0IGJhY2sgdG8gYXF1YS5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnIgXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheSBcbiAgICAgKi9cbiAgICBhc3luYyAjdXBkYXRlQmFyKGFyciwgaW5kZXgsIGRlbGF5KXtcbiAgICAgICAgY29uc3QgYmFyID0gdGhpcy4jYXJyYXkucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXggPSBcIiR7aW5kZXh9XCJdYCk7XG4gICAgICAgIGJhci5zdHlsZS5oZWlnaHQgPSBgJHsoNTAqYXJyW2luZGV4XSkvTWF0aC5tYXgoLi4uYXJyKX12aGA7XG4gICAgICAgIHRoaXMuI3BhaW50QmFyKGluZGV4LCAncmVkJyk7XG4gICAgICAgIGF3YWl0IHNsZWVwKGRlbGF5KTtcbiAgICAgICAgdGhpcy4jcGFpbnRCYXIoaW5kZXgsICdhcXVhJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvcnRzIHRoZSBhcnJheSBhbmQgbWFwcyB0aGUgcHJvY2VzcyB0byB0aGUgYmFycyAoYXJyYXkgdmlzdWFsKVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzb3J0aW5nQWxnb3JpdGhtIFNvcnRpbmcgQWxnb3JpdGhtIHRvIGFwcGx5IG9uIHRoZSBhcnJheVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheSBtaWxpc2Vjb25kcyB0byBkZWxheVxuICAgICAqL1xuICAgIGFzeW5jIHNvcnQoc29ydGluZ0FsZ29yaXRobSwgZGVsYXkpe1xuICAgICAgICBzd2l0Y2ggKHNvcnRpbmdBbGdvcml0aG0pe1xuICAgICAgICAgICAgY2FzZSAnc2VsZWN0aW9uLXNvcnQnOlxuICAgICAgICAgICAgICAgIGF3YWl0IHNlbGVjdGlvblNvcnQodGhpcy4jYXJyLCB0aGlzLiN1cGRhdGVCYXIuYmluZCh0aGlzKSwgZGVsYXkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbnNlcnRpb24tc29ydCc6XG4gICAgICAgICAgICAgICAgYXdhaXQgaW5zZXJ0aW9uU29ydCh0aGlzLiNhcnIsIHRoaXMuI3VwZGF0ZUJhci5iaW5kKHRoaXMpLCBkZWxheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdidWJibGUtc29ydCc6XG4gICAgICAgICAgICAgICAgYXdhaXQgYnViYmxlU29ydCh0aGlzLiNhcnIsIHRoaXMuI3VwZGF0ZUJhci5iaW5kKHRoaXMpLCBkZWxheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtZXJnZS1zb3J0JzpcbiAgICAgICAgICAgICAgICBhd2FpdCBtZXJnZVNvcnQodGhpcy4jYXJyLCAwLCB0aGlzLiNhcnIubGVuZ3RoLTEsIHRoaXMuI3VwZGF0ZUJhci5iaW5kKHRoaXMpLCBkZWxheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxdWljay1zb3J0JzpcbiAgICAgICAgICAgICAgICBhd2FpdCBxdWlja1NvcnQodGhpcy4jYXJyLCAwLCB0aGlzLiNhcnIubGVuZ3RoIC0xLCB0aGlzLiN1cGRhdGVCYXIuYmluZCh0aGlzKSwgdGhpcy4jcGFpbnRCYXIuYmluZCh0aGlzKSwgZGVsYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBodG1sIHN0cnVjdHVyZSB0aGF0IHJlcHJlc2VudHMgdGhlIGFycmF5IHZpc3VhbC5cbiAgICAgKiBAcmV0dXJucyB0aGUgaHRtbCBzdHJ1Y3R1cmVcbiAgICAgKi9cbiAgICBnZXRBcnJheUJhcnMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2FycmF5O1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5QmFyczsiLCJpbXBvcnQgJy4vc29ydGluZy12aWV3LmNzcyc7XG5pbXBvcnQgQXJyYXlCYXJzIGZyb20gJy4vYXJyYXktYmFycyc7XG5pbXBvcnQge2NyZWF0ZU5ld0FycmF5fSBmcm9tICcuL3V0aWxzL2FycmF5LXV0aWxzJztcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIHNvcnRpbmcgcGFnZS5cbiAqIEFsbCBlbGVtZW50cyBhcmUgbmVzdGVkIGluc2lkZSBhIG1haW4gZWxlbWVudFxuICovXG5jbGFzcyBTb3J0aW5nVmlld3tcbiAgICAvL3RoZSBodG1sIGZvciB0aGUgcGFnZVxuICAgICN2aWV3O1xuICAgIC8vY29udHJvbGwgdmFyaWFibGUgZm9yIHRoZSBhcnJheSBsZW5ndGhcbiAgICAjYXJyYXlTaXplID0gMTAwO1xuICAgIC8vY29udHJvbGwgdmFyaWFibGUgZm9yIHRoZSBzb3J0IGFsZ29yaXRobSBcbiAgICAjc29ydGluZ0FsZ29yaXRobSA9ICdzZWxlY3Rpb24tc29ydCc7XG4gICAgLy9jb250cm9sbCB2YXJpYWJsZSBmb3IgdGhlIGRlbGF5XG4gICAgI2RlbGF5ID0gMTtcbiAgICAvL3ZhcmlhYmxlIHRoYXQgaG9sZHMgdGhlIGFycmF5XG4gICAgI2FycmF5O1xuICAgIC8vdGhlIGh0bWwgZm9yIHRoZSBhcnJheSB2aXN1YWxpemF0aW9uXG4gICAgI2FycmF5QmFycztcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vY3JlYXRlIHRoZSB2aWV3XG4gICAgICAgIHRoaXMuI3JlbmRlcigpO1xuICAgICAgICAvL2FkZCB0aGUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIHRoaXMuI2FkZFZpZXdMaXN0ZW5lcnMoKTtcbiAgICAgICAgLy9jcmVhdGUgdGhlIGFycmF5IHZpc3VhbGl6YXRpb25cbiAgICAgICAgdGhpcy4jY3JlYXRlQXJyYXlCYXJzKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHZpZXc6XG4gICAgICogLSBUaXRsZVxuICAgICAqIC0gYXJyYXkgdmlzdWFsIGNvbnRhaW5lclxuICAgICAqIC0gY29udHJvbGxzXG4gICAgICogLSBzZXR0aW5ncyBkaXNwbGF5XG4gICAgICovXG4gICAgI3JlbmRlcigpe1xuICAgICAgICB0aGlzLiN2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICB0aGlzLiN2aWV3LmNsYXNzTGlzdC5hZGQoJ3NvcnRpbmctdmlldycpO1xuICAgICAgICB0aGlzLiN2aWV3LmlubmVySFRNTCA9IGBcbiAgICAgICAgXG4gICAgICAgIDxoMj5Tb3J0aW5nIEFsZ29yaXRobXMgVmlzdWFsaXphdGlvbjwvaDI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyYXktYmFyc1wiPjwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz0nc29ydGluZy12aWV3LS1jb250cm9sbGVyJz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+TmV3IEFycmF5PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzb3J0aW5nLXZpZXctLWNvbnRyb2xsZXItLW5ldy1hcnJheVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNDggNDhcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkuOCAzMS40NXEtMS0xLjgtMS40LTMuNjI1UTggMjYgOCAyNC4xcTAtNi41NSA0LjcyNS0xMS4yNzVRMTcuNDUgOC4xIDI0IDguMWgyLjE1bC00LTQgMS45NS0xLjk1IDcuNDUgNy40NS03LjQ1IDcuNDUtMi0yIDMuOTUtMy45NUgyNHEtNS4zNSAwLTkuMTc1IDMuODI1UTExIDE4Ljc1IDExIDI0LjFxMCAxLjQ1LjI3NSAyLjc1dC42NzUgMi40NVpNMjMuOCA0NmwtNy40NS03LjQ1IDcuNDUtNy40NSAxLjk1IDEuOTUtNCA0SDI0cTUuMzUgMCA5LjE3NS0zLjgyNVEzNyAyOS40IDM3IDI0LjA1cTAtMS40NS0uMjUtMi43NVQzNiAxOC44NWwyLjE1LTIuMTVxMSAxLjggMS40MjUgMy42MjVRNDAgMjIuMTUgNDAgMjQuMDVxMCA2LjU1LTQuNzI1IDExLjI3NVEzMC41NSA0MC4wNSAyNCA0MC4wNWgtMi4yNWw0IDRaXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzb3J0aW5nLXZpZXctLWNvbnRyb2xsZXItLWFycmF5LXNpemVcIj5BcnJheSBTaXplPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzb3J0aW5nLXZpZXctLWNvbnRyb2xsZXItLWFycmF5LXNpemVcIiB0eXBlPVwicmFuZ2VcIiBtaW49XCI1MFwiIG1heD1cIjEwMDBcIiB2YWx1ZT1cIiR7dGhpcy4jYXJyYXlTaXplfVwiPlxuICAgICAgICAgICAgICAgIDxzbWFsbD4ke3RoaXMuI2FycmF5U2l6ZX14JHt0aGlzLiNhcnJheVNpemV9PC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzb3J0aW5nLXZpZXctLWNvbnRyb2xsZXItLWFsZ29yaXRobVwiPlNvcnRpbmcgQWxnb3JpdGhtPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic29ydGluZy12aWV3LS1jb250cm9sbGVyLS1hbGdvcml0aG1cIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlbGVjdGlvbi1zb3J0XCI+U2VsZWN0aW9uIFNvcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImluc2VydGlvbi1zb3J0XCI+SW5zZXJ0aW9uIFNvcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJ1YmJsZS1zb3J0XCI+QnViYmxlIFNvcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmdlLXNvcnRcIj5NZXJnZSBTb3J0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJxdWljay1zb3J0XCI+UXVpY2sgU29ydDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNvcnRpbmctdmlldy0tY29udHJvbGxlci0tZGVsYXlcIj5EZWxheTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNvcnRpbmctdmlldy0tY29udHJvbGxlci0tZGVsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4wPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzBcIj4zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0MFwiPjQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+U3RhcnQ8L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNvcnRpbmctdmlldy0tY29udHJvbGxlci0tc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNi41IDMxLjVoM3YtMTVoLTNabTgtLjQ1TDM1LjEgMjRsLTEwLjYtNy4wNVpNMjQgNDRxLTQuMSAwLTcuNzUtMS41NzUtMy42NS0xLjU3NS02LjM3NS00LjMtMi43MjUtMi43MjUtNC4zLTYuMzc1UTQgMjguMSA0IDI0cTAtNC4xNSAxLjU3NS03LjggMS41NzUtMy42NSA0LjMtNi4zNSAyLjcyNS0yLjcgNi4zNzUtNC4yNzVRMTkuOSA0IDI0IDRxNC4xNSAwIDcuOCAxLjU3NSAzLjY1IDEuNTc1IDYuMzUgNC4yNzUgMi43IDIuNyA0LjI3NSA2LjM1UTQ0IDE5Ljg1IDQ0IDI0cTAgNC4xLTEuNTc1IDcuNzUtMS41NzUgMy42NS00LjI3NSA2LjM3NXQtNi4zNSA0LjNRMjguMTUgNDQgMjQgNDRabTAtM3E3LjEgMCAxMi4wNS00Ljk3NVE0MSAzMS4wNSA0MSAyNHEwLTcuMS00Ljk1LTEyLjA1UTMxLjEgNyAyNCA3cS03LjA1IDAtMTIuMDI1IDQuOTVRNyAxNi45IDcgMjRxMCA3LjA1IDQuOTc1IDEyLjAyNVExNi45NSA0MSAyNCA0MVptMC0xN1pcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcyA9IFwic29ydGluZy12aWV3LS1zZXR0aW5ncy1pbmZvXCI+XG4gICAgICAgICAgICA8cD5DdXJyZW50IFNldHRpbmdzOjwvcD5cbiAgICAgICAgICAgIDxzbWFsbCBjbGFzcz0gXCJzb3J0aW5nLXZpZXctLXNldHRpbmdzLWluZm8tLXNpemVcIiA+QXJyYXkgU2l6ZTogPHNwYW4+JHt0aGlzLiNhcnJheVNpemV9PC9zcGFuPjwvc21hbGw+XG4gICAgICAgICAgICA8c21hbGwgY2xhc3M9IFwic29ydGluZy12aWV3LS1zZXR0aW5ncy1pbmZvLS1hbGdvcml0aG1cIiA+U29ydGluZyBBbGdvcml0aG06IDxzcGFuPiR7dGhpcy4jc29ydGluZ0FsZ29yaXRobX08L3NwYW4+PC9zbWFsbD5cbiAgICAgICAgICAgIDxzbWFsbCBjbGFzcz0gXCJzb3J0aW5nLXZpZXctLXNldHRpbmdzLWluZm8tLWRlbGF5XCIgPkRlbGF5OiA8c3Bhbj4ke3RoaXMuI2RlbGF5fTwvc3Bhbj48L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogY3JlYXRlcyBhIG5ldyByYW5kb20gYXJyYXkgYW5kIHVwZGF0ZXMgdGhlIGFycmF5IHZpc3VhbFxuICAgICAqL1xuICAgICNjcmVhdGVBcnJheUJhcnMoKXtcbiAgICAgICAgdGhpcy4jYXJyYXkgPSBjcmVhdGVOZXdBcnJheSh0aGlzLiNhcnJheVNpemUpO1xuICAgICAgICB0aGlzLiN1cGRhdGVBcnJheUJhcnMoKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGFycmF5IHZpc3VhbCBhbmQgcmVwbGFjZXMgaXQgd2l0aCB0aGUgb2xkIG9uZSBvbiB0aGUgdmlld1xuICAgICAqL1xuICAgICN1cGRhdGVBcnJheUJhcnMoKXtcbiAgICAgICAgdGhpcy4jYXJyYXlCYXJzID0gbmV3IEFycmF5QmFycyh0aGlzLiNhcnJheSwgdGhpcy4jc29ydGluZ0FsZ29yaXRobSwgdGhpcy4jZGVsYXkpO1xuICAgICAgICB0aGlzLiN2aWV3LnF1ZXJ5U2VsZWN0b3IoJy5hcnJheS1iYXJzJykucmVwbGFjZVdpdGgodGhpcy4jYXJyYXlCYXJzLmdldEFycmF5QmFycygpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgTGlzdGVuZXIgZm9yIHRoZSBhcnJheSBzaXplIHNsaWRlci4gVXBkYXRlcyB0aGUgdGV4dCBvZiB0aGUgYXJyYXkgc2l6ZSBzbGlkZXIgdGhhdCBpc1xuICAgICAqIGRpc3BsYXllZCBpbiBhIHNtYWxsIGVsZW1lbmV0LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFxuICAgICAqL1xuICAgICN1cGRhdGVBcnJheVNpemVJbnB1dFRleHQoZXZlbnQpe1xuICAgICAgICB0aGlzLiN2aWV3LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0aW5nLXZpZXctLWNvbnRyb2xsZXItLWFycmF5LXNpemUgKyBzbWFsbCcpLnRleHRDb250ZW50PWV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgTGlzdGVuZXIgZm9yIHRoZSBhcnJheSBzaXplIHNsaWRlci4gVXBkYXRlcyB0aGUgdGV4dCBvZiB0aGUgYXJyYXkgc2l6ZSBzbGlkZXIgYW5kIHRoZSBzZXR0aW5nc1xuICAgICAqIGRpc3BsYXkuIFNldHMgdGhlIGFycmF5IHNpemUgcHJvcGVydHkgdG8gdGhlIG5ldyBzZWxlY3RlZCB2YWx1ZSBhbmQgY3JlYXRlcyBhIG5ldyBhcnJheSB2aXN1YWwuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgXG4gICAgICovXG4gICAgI3VwZGF0ZUFycmF5U2l6ZShldmVudCl7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUFycmF5U2l6ZUlucHV0VGV4dChldmVudCk7XG4gICAgICAgIHRoaXMuI3ZpZXcucXVlcnlTZWxlY3RvcignLnNvcnRpbmctdmlldy0tc2V0dGluZ3MtaW5mby0tc2l6ZSA+IHNwYW4nKS50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy4jYXJyYXlTaXplID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLiNjcmVhdGVBcnJheUJhcnMoKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBMaXN0ZW5lciBmb3IgdGhlIHNvcnRpbmcgYWxnb3JpdGhtIHNlbGVjdGlvbi4gVXBkYXRlcyB0aGUgc2V0dGluZ3MgZGlzcGxheVxuICAgICAqIGFuZCBzZXRzIHRoZSBzb3J0aW5nIGFsZ29yaXRobSBwcm9wZXJ0eSB0byB0aGUgc2VsZWN0ZWQgbmV3IHZhbHVlLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFxuICAgICAqL1xuICAgICN1cGRhdGVTb3J0QWxnb3JpdGhtKGV2ZW50KXtcbiAgICAgICAgdGhpcy4jdmlldy5xdWVyeVNlbGVjdG9yKCcuc29ydGluZy12aWV3LS1zZXR0aW5ncy1pbmZvLS1hbGdvcml0aG0gPiBzcGFuJykudGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuI3NvcnRpbmdBbGdvcml0aG0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IExpc3RlbmVyIGZvciB0aGUgZGVsYXkgc2VsZWN0aW9uLiBVcGRhdGVzIHRoZSBzZXR0aW5ncyBkaXNwbGF5IHRleHQgYW5kXG4gICAgICogc2V0cyB0aGUgZGVsYXkgcHJvcGVydHkgdG8gdGhlIG5ldyBzZWxlY3RlZCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBcbiAgICAgKi9cbiAgICAjdXBkYXRlU29ydERlbGF5KGV2ZW50KXtcbiAgICAgICAgdGhpcy4jdmlldy5xdWVyeVNlbGVjdG9yKCcuc29ydGluZy12aWV3LS1zZXR0aW5ncy1pbmZvLS1kZWxheSA+IHNwYW4nKS50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy4jZGVsYXkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IExpc3RlbmVyIGZvciB0aGUgU3RhcnQgQnV0dG9uLiBEaXNhYmxlcyBhbGwgdGhlIGNvbnRyb2xsZXJzICh3ZSBkbyBub3Qgd2FudCB0byBtYWtlIGNoYW5nZXNcbiAgICAgKiB3aGlsZSB0aGUgYWxnb3JpdGhtIGlzIHJ1bm5pbikuIFN0YXJ0cyB0aGUgc29ydGluZ3MgYWxnb3JpdGhtLiBXaGVuIGl0IGZpbmlzaGVzIHJlIGVuYWJsZXMgdGhlIGNvbnRyb2xsZXJzLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFxuICAgICAqL1xuICAgIGFzeW5jICNzdGFydFNvcnQoZXZlbnQpe1xuICAgICAgICBsZXQgYXJyYXlOZXdCdXR0b249IHRoaXMuI3ZpZXcucXVlcnlTZWxlY3RvcignI3NvcnRpbmctdmlldy0tY29udHJvbGxlci0tbmV3LWFycmF5Jyk7XG4gICAgICAgIGxldCBhcnJheVNpemVJbnB1dCA9IHRoaXMuI3ZpZXcucXVlcnlTZWxlY3RvcignI3NvcnRpbmctdmlldy0tY29udHJvbGxlci0tYXJyYXktc2l6ZScpO1xuICAgICAgICBsZXQgYXJyYXlTb3J0QWxnb3JpdGhtID0gdGhpcy4jdmlldy5xdWVyeVNlbGVjdG9yKCcjc29ydGluZy12aWV3LS1jb250cm9sbGVyLS1hbGdvcml0aG0nKTtcbiAgICAgICAgbGV0IGFycmF5U29ydERlbGF5ID0gdGhpcy4jdmlldy5xdWVyeVNlbGVjdG9yKCcjc29ydGluZy12aWV3LS1jb250cm9sbGVyLS1kZWxheScpO1xuICAgICAgICBcbiAgICAgICAgYXJyYXlOZXdCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBhcnJheVNpemVJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGFycmF5U29ydEFsZ29yaXRobS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGFycmF5U29ydERlbGF5LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICBhd2FpdCB0aGlzLiNhcnJheUJhcnMuc29ydCh0aGlzLiNzb3J0aW5nQWxnb3JpdGhtLCB0aGlzLiNkZWxheSk7XG5cbiAgICAgICAgYXJyYXlOZXdCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYXJyYXlTaXplSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYXJyYXlTb3J0QWxnb3JpdGhtLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGFycmF5U29ydERlbGF5LmRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIGVsZW1lbnRzIG9mIHRoZSB2aWV3XG4gICAgICovXG4gICAgI2FkZFZpZXdMaXN0ZW5lcnMoKXtcbiAgICAgICAgbGV0IGFycmF5TmV3QnV0dG9uPSB0aGlzLiN2aWV3LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0aW5nLXZpZXctLWNvbnRyb2xsZXItLW5ldy1hcnJheScpO1xuICAgICAgICBhcnJheU5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuI2NyZWF0ZUFycmF5QmFycy5iaW5kKHRoaXMpKTtcblxuICAgICAgICBsZXQgYXJyYXlTaXplSW5wdXQgPSB0aGlzLiN2aWV3LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0aW5nLXZpZXctLWNvbnRyb2xsZXItLWFycmF5LXNpemUnKTtcbiAgICAgICAgYXJyYXlTaXplSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLiN1cGRhdGVBcnJheVNpemVJbnB1dFRleHQuYmluZCh0aGlzKSk7XG4gICAgICAgIGFycmF5U2l6ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuI3VwZGF0ZUFycmF5U2l6ZS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBsZXQgYXJyYXlTb3J0QWxnb3JpdGhtID0gdGhpcy4jdmlldy5xdWVyeVNlbGVjdG9yKCcjc29ydGluZy12aWV3LS1jb250cm9sbGVyLS1hbGdvcml0aG0nKTtcbiAgICAgICAgYXJyYXlTb3J0QWxnb3JpdGhtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuI3VwZGF0ZVNvcnRBbGdvcml0aG0uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgbGV0IGFycmF5U29ydERlbGF5ID0gdGhpcy4jdmlldy5xdWVyeVNlbGVjdG9yKCcjc29ydGluZy12aWV3LS1jb250cm9sbGVyLS1kZWxheScpO1xuICAgICAgICBhcnJheVNvcnREZWxheS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLiN1cGRhdGVTb3J0RGVsYXkuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgbGV0IGFycmF5U3RhcnRCdXR0b24gPSB0aGlzLiN2aWV3LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0aW5nLXZpZXctLWNvbnRyb2xsZXItLXN0YXJ0Jyk7XG4gICAgICAgIGFycmF5U3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNzdGFydFNvcnQuYmluZCh0aGlzKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVycyB0aGF0IHdlcmUgYWRkZWQgdG8gdGhlIHZpZXcuIEZpbmFsbHkgcmVtb3ZlcyB0aGVcbiAgICAgKiB2aWV3IGZyb20gdGhlIERPTS5cbiAgICAgKi9cbiAgICBkZWxldGVWaWV3KCl7XG4gICAgICAgIGxldCBhcnJheU5ld0J1dHRvbj0gdGhpcy4jdmlldy5xdWVyeVNlbGVjdG9yKCcjc29ydGluZy12aWV3LS1jb250cm9sbGVyLS1uZXctYXJyYXknKTtcbiAgICAgICAgYXJyYXlOZXdCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNjcmVhdGVBcnJheUJhcnMpO1xuXG4gICAgICAgIGxldCBhcnJheVNpemVJbnB1dCA9IHRoaXMuI3ZpZXcucXVlcnlTZWxlY3RvcignI3NvcnRpbmctdmlldy0tY29udHJvbGxlci0tYXJyYXktc2l6ZScpO1xuICAgICAgICBhcnJheVNpemVJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuI3VwZGF0ZUFycmF5U2l6ZUlucHV0VGV4dC5iaW5kKHRoaXMpKTtcbiAgICAgICAgYXJyYXlTaXplSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy4jdXBkYXRlQXJyYXlTaXplLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGxldCBhcnJheVNvcnRBbGdvcml0aG0gPSB0aGlzLiN2aWV3LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0aW5nLXZpZXctLWNvbnRyb2xsZXItLWFsZ29yaXRobScpO1xuICAgICAgICBhcnJheVNvcnRBbGdvcml0aG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy4jdXBkYXRlU29ydEFsZ29yaXRobS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBsZXQgYXJyYXlTb3J0RGVsYXkgPSB0aGlzLiN2aWV3LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0aW5nLXZpZXctLWNvbnRyb2xsZXItLWRlbGF5Jyk7XG4gICAgICAgIGFycmF5U29ydERlbGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuI3VwZGF0ZVNvcnREZWxheS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBsZXQgYXJyYXlTdGFydEJ1dHRvbiA9IHRoaXMuI3ZpZXcucXVlcnlTZWxlY3RvcignI3NvcnRpbmctdmlldy0tY29udHJvbGxlci0tc3RhcnQnKTtcbiAgICAgICAgYXJyYXlTdGFydEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuI3N0YXJ0U29ydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLiN2aWV3LnJlbW92ZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2aWV3IHByb3BlcnR5IG9mIHRoZSBjbGFzcyB3aGljaCByZXByZXNlbnRzIGEgZG9tIG5vZGUuXG4gICAgICogQHJldHVybnMgdGhlIHZpZXdcbiAgICAgKi9cbiAgICBnZXRWaWV3KCl7XG4gICAgICAgIHJldHVybiB0aGlzLiN2aWV3O1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0aW5nVmlldztcbiIsIi8qKlxuKiBTd2FwcyB0aGUgdmFsdWVzIG9mIGluZGV4IHggYW5kIGluZGV4IHkgb2YgYW4gYXJyYXkuICAgICBcbiogQHBhcmFtIHtBcnJheX0gYXJyIGFycmF5XG4qIEBwYXJhbSB7TnVtYmVyfSB4IGluZGV4IG9mIGFycmF5XG4qIEBwYXJhbSB7TnVtYmVyfSB5IGluZGV4IG9mIGFycmF5XG4qIEByZXR1cm5zIHRoZSBhcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3dhcChhcnIsIHgsIHkpe1xuICAgIGxldCB0ZW1wID0gYXJyW3hdO1xuICAgIGFyclt4XSA9IGFyclt5XTtcbiAgICBhcnJbeV0gPSB0ZW1wO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIEludGVnZXIgbnVtYmVyIGluIHRoZSByYW5nZSBbbWluLG1heF0uXG4gKiBAcGFyYW0ge051bWJlcn0gbWluIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4IG1heGltdW0gbnVtYmVyXG4gKiBAcmV0dXJucyByYW5kb20gSW50ZWdlciBbbWluLG1heF1cbiAqL1xuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICkgKyBtaW47XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYXJyYXkgZmlsbGVkIHdpdGggcmFuZG9tIGludGVnZXJzLlxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmdodCBsZW5naHQgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJucyByYW5kb20gaW50ZWdlcnMgYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld0FycmF5KGxlbmdodCl7XG4gICAgbGV0IGFycmF5PSBuZXcgQXJyYXkobGVuZ2h0KTtcbiAgICBmb3IobGV0IGk9MDsgaTxsZW5naHQ7IGkrKyl7XG4gICAgICAgIGFycmF5W2ldID0gZ2V0UmFuZG9tSW50KDEwLCAxMDAwKTtcbiAgICB9O1xuICAgICByZXR1cm4gYXJyYXk7XG59O1xuXG5cbiIsIi8qKlxuKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk1MTAyMS93aGF0LWlzLXRoZS1qYXZhc2NyaXB0LXZlcnNpb24tb2Ytc2xlZXBcbiogVXRpbGl0eSBGdW5jdGlvbiBmb3IgaW5zZXJ0aW5nIGEgZGVsYXkgdG8gYSBmdW5jdGlvbi5cbiogYXN5bmMvYXdhaXRcbiogQHBhcmFtIHtOdW1iZXJ9IG1zIG1pbGlzZWNvbmRzIHRvIHNsZWVwXG4qIEByZXR1cm5zIFByb21pc2VcbiovXG5mdW5jdGlvbiBzbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNsZWVwOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNvcnRpbmdWaWV3IGZyb20gJy4vc29ydGluZy9zb3J0aW5nLXZpZXcnO1xuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJztcblxuXG5sZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxubWFpbi5yZXBsYWNlV2l0aChuZXcgU29ydGluZ1ZpZXcoKS5nZXRWaWV3KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==