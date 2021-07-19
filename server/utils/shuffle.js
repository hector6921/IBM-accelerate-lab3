/**
 * Welcome to the bonus round. 
 * We need our options to be shuffled before
 * we send it to our users. Create a function that
 * will take in an array and shuffle the order of that
 * array.
 */

/**
 * Shuffles an array
 * @param {Array} array original array 
 * @returns {Array} shuffled array
 */
function shuffleArray(array) {
  const arr = array.slice(0)
  // Implementation goes here
  var currentIndex = arr.length,  randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr
}

module.exports = shuffleArray