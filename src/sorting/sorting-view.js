import './sorting-view.css';
import ArrayBars from './array-bars';
import {createNewArray} from './utils/array-utils';


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
        this.#array = createNewArray(this.#arraySize);
        this.#updateArrayBars()
    };

    /**
     * Creates a new array visual and replaces it with the old one on the view
     */
    #updateArrayBars(){
        this.#arrayBars = new ArrayBars(this.#array, this.#sortingAlgorithm, this.#delay);
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

export default SortingView;
