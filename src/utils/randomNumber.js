/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * max) + min;
}

export default randomNumber;
