let button = document.querySelector('button')
button.addEventListener('click',criar )

function criar(){
let p = document.createElement('div')
let input = document.querySelector('input')
let main = document.querySelector('main')
p.textContent = input.value
p.style.border = "1px solid red" 
p.style.height = "20px"
p.style.display = "flex"
p.style.justifyContent = "center"
main.appendChild(p)
}