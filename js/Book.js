/* < ================== SCROLL UP ================= > */
let btnScroll = document.getElementById('btnScroll');
onscroll = ()=> (scrollY >= 400)?btnScroll.classList.add('bottom-0'):btnScroll.classList.remove('bottom-0');
btnScroll.onclick = ()=> scroll({top:0});
/* < =============== DARK & LIGHT MOOD =============== > */
let moon = document.getElementById('moon'),
    sun = document.getElementById('sun');
function theme(id) {
    localStorage.mood = JSON.stringify(id)
    change()
}
function change() {
    if (localStorage.mood != null ) {
        let th = JSON.parse(localStorage.mood)
        if (th === 'moon') {
            moon.classList.add('d-none')
            sun.classList.remove('d-none')
            document.body.classList.add('Dark-theme')
        }else{
            moon.classList.remove('d-none')
            sun.classList.add('d-none')
            document.body.classList.remove('Dark-theme')
        }
    }
}
change()
