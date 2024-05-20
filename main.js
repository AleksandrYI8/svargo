let modal = document.querySelector(".modal_dialog")
let modal_close = document.querySelector(".close_btn")
let menu = document.querySelector(".menu")
let container = document.querySelector(".container")
let header = document.querySelector(".header_box")
let body = document.body

menu.onclick = () => {
  modal.classList.add("show")
  modal.classList.remove("hide")

  body.classList.add("overflow")
  container.classList.add("opacity")
  header.classList.add("opacity")
  
}


modal_close.onclick = () => {
  modal.classList.add("hide")
  modal.classList.remove("show")

  body.classList.remove("overflow")
  container.classList.remove("opacity")
  header.classList.remove("opacity")
}

