function sss() {
let toogle = document.querySelector('#toggle')
let p = document.querySelector('#p')

toogle.addEventListener('mouseup', () => {
    p.innerHTML = 'Offline'
    p.style.color = 'red'
    toogle.style.backgroundColor = 'red'
    document.body.a.style.color = 'red'
})

toogle.addEventListener('mousedown', () => {
    p.innerHTML = 'online'
    p.style.color = 'green'
    toogle.style.backgroundColor = 'green'
    document.body.p.style.textColor = 'green'
})

}



