import "../types"

import randomNumber from "./randomNumber"
import {
  lowerCaseArr,
  upperCaseArr,
  numberArr,
  specialCharArr
} from "../initial/defaultCharArr";

/**
 * @param {userInput} userInput
 * @returns {string}
 */
function generatePassword(userInput) {
  let totalItem = {
    upper: 0,
    lower: 0,
    number: 0,
    specialChar: 0
  };
  const initialArrayObj = {
    upper: [...upperCaseArr],
    lower: [...lowerCaseArr],
    number: [...numberArr],
    specialChar: [...specialCharArr]
  };

  let LENGTH = userInput.passwordLength;
  let INITIAL_LENGTH = userInput.passwordLength;
  let TOTAL = 0;
  let LENGTH_KEYS = userInput.selectedVariants.length - 1;
  let maxRandom = 0
  let lastLength = 0

  userInput.selectedVariants.forEach((key) => {
    maxRandom = LENGTH - LENGTH_KEYS - TOTAL
    lastLength = INITIAL_LENGTH - TOTAL

    totalItem[key] = LENGTH_KEYS === 0 ? lastLength : randomNumber(1, maxRandom)

    TOTAL += totalItem[key];
    LENGTH_KEYS--;
  });

  let result = [];

  userInput.selectedVariants.forEach((key) => {
    for (let i = 1; i <= totalItem[key]; i++) {
      result.push(
        initialArrayObj[key][randomNumber(0, initialArrayObj[key].length - 1)]
      );
    }
  });

  return result.join("")
}

export default generatePassword