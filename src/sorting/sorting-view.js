import ArrayBars from './array-bars';
import './sorting-view.css';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};

function createNewArray(lenght){
    let array= new Array(lenght);
    for(let i=0; i<lenght; i++){
        array[i] = getRandomInt(10, 1000);
    };
    return array;
};

class SortingView{
    #view;
    #arraySize = 100;
    #sortingAlgorithm = 'selection-sort';
    #delay = 10;
    #array;
    #arrayBars;

    constructor(){
        this.#render();
        this.#addViewListeners();
        this.#createArrayBars();

    };

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
                    <option value="bucket-sort">Bucket Sort</option>
                    <option value="heap-sort">Heap Sort</option>
                </select>
            </div>

            <div>
                <label for="sorting-view--controller--delay">Delay</label>
                <select id="sorting-view--controller--delay">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
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

    #createArrayBars(){
        this.#array = createNewArray(this.#arraySize);
        this.#updateArrayBars()
    };

    #updateArrayBars(){
        this.#arrayBars = new ArrayBars(this.#array, this.#sortingAlgorithm, this.#delay);
        this.#view.querySelector('.array-bars').replaceWith(this.#arrayBars.getArrayBars());
    };

    #updateArraySizeInputText(event){
        this.#view.querySelector('#sorting-view--controller--array-size + small').textContent=event.target.value;
    };

    #updateArraySize(event){
        this.#updateArraySizeInputText(event);
        this.#view.querySelector('.sorting-view--settings-info--size > span').textContent = event.target.value;
        this.#arraySize = event.target.value;
        this.#createArrayBars();
    };

    #updateSortAlgorithm(event){
        this.#view.querySelector('.sorting-view--settings-info--algorithm > span').textContent = event.target.value;
        this.#sortingAlgorithm = event.target.value;
    };

    #updateSortDelay(event){
        this.#view.querySelector('.sorting-view--settings-info--delay > span').textContent = event.target.value;
        this.#delay = event.target.value;
    };

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

        this.#view.remove();
    };

    getView(){
        return this.#view;
    };
};

export default SortingView

