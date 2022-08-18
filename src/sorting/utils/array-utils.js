/**
* Swaps the values of index x and index y of an array.     
* @param {Array} arr array
* @param {Number} x index of array
* @param {Number} y index of array
* @returns the array
 */
export function swap(arr, x, y){
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
export function createNewArray(lenght){
    let array= new Array(lenght);
    for(let i=0; i<lenght; i++){
        array[i] = getRandomInt(10, 1000);
    };
     return array;
};


