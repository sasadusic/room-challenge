const left = document.querySelector('#left-arrow')
const right = document.querySelector('#right-arrow')
const topLeft = document.querySelectorAll('.top-left')
const topRight = document.querySelectorAll('.top-right')
const span = document.querySelector('span')
const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('#navbar')

let index = 1

left.onclick = () => {
    index--
    if(index < 1) index = 3
    // span.innerText = index
    
    topLeft.forEach(tl => {
        if(tl.id === `top-left-${index}`){
            tl.style.display = 'block'
        }
        else{
            tl.style.display = 'none'

        }
    })
    topRight.forEach(tr => {
        if(tr.id === `top-right-${index}`){
            tr.style.display = 'block'
        }
        else{
            tr.style.display = 'none'

        }
    })
}
right.onclick = () => {
    index++
    if(index > 3) index = 1
    // span.innerText = index
    topLeft.forEach(tl => {
        if(tl.id === `top-left-${index}`){
            tl.style.display = 'block'
        }
        else{
            tl.style.display = 'none'
    
        }
    })
    topRight.forEach(tr => {
        if(tr.id === `top-right-${index}`){
            tr.style.display = 'block'
        }
        else{
            tr.style.display = 'none'
    
        }
    })
}
hamburger.onclick = () => {
    navbar.classList.toggle('active')
}