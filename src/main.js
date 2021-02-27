import "bootstrap/dist/css/bootstrap.min.css"
import "./style/root.css"
import "./types"

import { isValidPasswordLength, isValidVariants, isValidPasswordQuantity } from "./utils/validate"
import downloadFile from './utils/downloadFile'
import generatePassword from "./utils/generatePassword"

const form = document.getElementById("form")
const downloadAsTxtElement = document.getElementById("download-as-txt")
const downloadAsCsvElement = document.getElementById("download-as-csv")
const resultAreaElement = document.getElementById("result-area")
const copyElement = document.getElementById('copy')

/**
 * @param {string} message
 * @param {"danger"|"success"} type
 */
function messageResultButtonHandler(message, type) {
  const messageResultButtomElement = document.getElementById("message-result-button")
  messageResultButtomElement.innerHTML = message
  messageResultButtomElement
    .className
    .split(" ")
    .forEach((item) => {
      /^text-.*$/.test(item) && messageResultButtomElement.classList.remove(item)
    })
  messageResultButtomElement.classList.add(`text-${type}`)
}

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
  messageResultButtonHandler("", "success")
}

function downloadAsTxtHandler() {
  downloadFile(resultAreaElement.value, "text/plain", "gen-my-pass.txt")
}

function downloadAsCsvHandler() {
  downloadFile(resultAreaElement.value, "text/csv", "gen-my-pass.csv")
}

function copyPasswordHandler() {
  if (!resultAreaElement.value) return messageResultButtonHandler("Result is empty", "danger")

  try {
    navigator
      .clipboard
      .writeText(resultAreaElement.value)
      .then(() => messageResultButtonHandler("Copied !", "success"))
      .catch((err) => {
        messageResultButtonHandler("Something wrong, please use HTTPS or modern browser", "danger")
      })
  } catch (err) {
    messageResultButtonHandler("Something wrong, please use HTTPS or modern browser", "danger")
  }
}

downloadAsTxtElement.addEventListener('click', downloadAsTxtHandler)
downloadAsCsvElement.addEventListener('click', downloadAsCsvHandler)
copyElement.addEventListener('click', copyPasswordHandler)
form.addEventListener("submit", formSubmitHandler)
