let modal = document.querySelector(".modal_dialog")
let modal_close = document.querySelector(".close_btn")
let menu = document.querySelector(".menu")
let container = document.querySelector(".container")
let header = document.querySelector(".header")
let line = document.querySelector(".line_header")
let header_box = document.querySelector(".header_box")
let footer = document.querySelector(".footer")
let footer_line = document.querySelector(".footer_box .line")
let body = document.body



menu.onclick = () => {
  modal.classList.add("show")
  modal.classList.remove("hide")
  
  let rect = header_box.offsetTop 
  
  modal.style.top = rect + "px"
  body.classList.add("overflow")
  container.classList.add("opacity")
  header.classList.add("opacity")
  footer.classList.add("opacity")
  line.classList.add("opacity")
  footer_line.classList.add("opacity")
  
}


modal_close.onclick = () => {
  modal.classList.add("hide")
  modal.classList.remove("show")

  body.classList.remove("overflow")
  container.classList.remove("opacity")
  header.classList.remove("opacity")
  line.classList.remove("opacity")
  footer.classList.remove("opacity")
  footer_line.classList.remove("opacity")


}

