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

export default sleep;