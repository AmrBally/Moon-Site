let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountians3 = document.getElementById('mountians3')
let mountians4 = document.getElementById('mountians4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let mountains7 = document.getElementById('mountains7')
let bally = document.querySelector('.bally')

let main = document.querySelector('.main')


window.onscroll = function() {

    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 2 + 'px';
    mountians3.style.top = value * 2+ 'px';
    mountians4.style.top = value + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    bally.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        bally.style.fontSize = 67 + 'px';
        bally.style.position = 'fixed';
        if(scrollY >= 478) {
            bally.style.display = 'none';
        }else{
            bally.style.display = 'block';
        }
        if(scrollY >= 127) {
            main.style.background = 'linear-gradient(#376281, #10001f)'
        }else {
            main.style.background = 'linear-gradient(#200016, #10001f)'

        }
    }


}










