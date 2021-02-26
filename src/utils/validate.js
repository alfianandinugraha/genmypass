import "../types"

const MAX_PASSWORD = 128
const MIN_PASSWORD = 4
const MIN_PASSWORD_QUANTITY = 1
const MAX_PASSWORD_QUANTITY = 100

/** 
 * @param {number} length
 * @returns {inputValidate} 
*/
function isValidPasswordLength(length) {
  if (!length) {
    return {
      isValid: false,
      message: "Please fill the password length correcly"
    }
  }

  if (length < MIN_PASSWORD || length > MAX_PASSWORD) {
    return {
      isValid: false,
      message: `Minimum password length is ${MIN_PASSWORD} and maximum is ${MAX_PASSWORD}`
    }
  }

  return {
    message: '',
    isValid: true
  }
}

/** 
 * @param {number} quantity
 * @returns {inputValidate} 
*/
function isValidPasswordQuantity(quantity) {
  if (!quantity) {
    return {
      isValid: false,
      message: "Please fill the password quantity correcly"
    }
  }

  if (quantity < MIN_PASSWORD_QUANTITY || quantity > MAX_PASSWORD_QUANTITY) {
    return {
      isValid: false,
      message: `Minimum password quantity is ${MIN_PASSWORD_QUANTITY} and maximum is ${MAX_PASSWORD_QUANTITY}`
    }
  }

  return {
    message: '',
    isValid: true
  }
}

/**
 * @param {string[]} variants
 * @returns {inputValidate}
*/
function isValidVariants(variants) {
  if (!variants.length) {
    return {
      isValid: false,
      message: 'Please pick at least one variant'
    }
  }

  return {
    message: '',
    isValid: true
  }
}

export {
  isValidPasswordLength,
  isValidVariants,
  isValidPasswordQuantity
}