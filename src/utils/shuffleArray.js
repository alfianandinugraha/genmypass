/**
 * @param {string} text
 * @returns {string}
 */
function shuffleArray(text) {
  let result = [...text]
  for (let i = text.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
  }

  return result
}

export default shuffleArray