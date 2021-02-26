import "bootstrap/dist/css/bootstrap.min.css"
import "./style/root.css"

const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

console.log("Hello world !")