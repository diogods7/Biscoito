const btnCookie = document.querySelector("#cookie")
const btnNew = document.querySelector(".screen2 button")

function handleClicker() {
    document.querySelector(".screen1").classList.toggle("hide")
    document.querySelector(".screen2").classList.toggle("hide")
}

btnCookie.addEventListener('click', handleClicker)
btnNew.addEventListener('click', handleClicker)

