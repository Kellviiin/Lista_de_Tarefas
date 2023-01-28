let button = document.querySelector('button')
button.addEventListener('click',criar )

function criar(){
let p = document.createElement('div')
let input = document.querySelector('input')
let main = document.querySelector('main')
p.textContent = `Você tem que ${input.value}` 
p.style.backgroundColor = "white"
p.style.height = "20px"
p.style.display = "flex"
p.style.justifyContent = "center"
main.appendChild(p)
}