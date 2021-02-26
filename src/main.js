import "bootstrap/dist/css/bootstrap.min.css"
import "./style/root.css"
import "./types"

import { isValidPasswordLength, isValidVariants, isValidPasswordQuantity } from "./utils/validate"

const form = document.getElementById("form")

/**
 * @param {Event} e
 */
function formSubmitHandler(e) {
  e.preventDefault()

  /** @type {string[]} */
  const selectedVariants = Array.from(e.target.variant).filter(el => el.checked).map(el => el.value)
  const checkSelectedVariants = isValidVariants(selectedVariants)
  if (!checkSelectedVariants.isValid) return alert(checkSelectedVariants.message)

  /** @type {number} */
  const passwordLength = +e.target.inputLength.value
  const checkPasswordLength = isValidPasswordLength(passwordLength)
  if (!checkPasswordLength.isValid) return alert(checkPasswordLength.message)

  /** @type {number} */
  const passwordQuantity = +e.target.inputQuantity.value
  const checkPasswordQuantity = isValidPasswordQuantity(passwordQuantity)
  if (!checkPasswordQuantity.isValid) return alert(checkPasswordQuantity.message)

  /** @type {userInput} */
  const userInput = {
    selectedVariants,
    passwordLength,
    passwordQuantity
  }

  alert(JSON.stringify(userInput, undefined, 2))
}

form.addEventListener("submit", formSubmitHandler)
