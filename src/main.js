import "bootstrap/dist/css/bootstrap.min.css"
import "./style/root.css"
import "./types"

import { isValidPasswordLength, isValidVariants, isValidPasswordQuantity } from "./utils/validate"
import downloadFile from './utils/downloadFile'
import generatePassword from "./utils/generatePassword"

const form = document.getElementById("form")
const downloadAsTxtElement = document.getElementById("download-as-txt")

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

  /** @type {string[]} */
  const randomPasswords = []

  for (let i = 0; i < userInput.passwordQuantity; i++) {
    randomPasswords.push(generatePassword(userInput))
  }

  const resultArea = document.getElementById('result-area')
  resultArea.value = randomPasswords.join("\n")
}

function downloadAsTxtHandler() {
  const resultAreaElement = document.getElementById("result-area")
  const FILENAME = "gen-my-pass.txt"

  downloadFile(resultAreaElement.value, "text/plain", FILENAME)
}

downloadAsTxtElement.addEventListener('click', downloadAsTxtHandler)
form.addEventListener("submit", formSubmitHandler)
