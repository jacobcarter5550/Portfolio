console.log('hell0')

// Directory––––––––––––––––––––––––––––––––––

const unClkdArrow = document.getElementById('nav_arrow')

const unClkdBall = document.getElementById('ball');

const clkd = document.querySelector('.nav_clkd');

const navRightSide = document.querySelector('.nav_rightside');

const navWrapAbout = document.querySelector('.navWrapperAbout');

const navWrapContact = document.querySelector('.navWrapperContact');

const navHoloSmall = document.getElementById('nav_holo');

const Logo = document.querySelector('.nav_logo');

const wholeNav = document.querySelector('.nav_container')
// Toggle––––––––––––––––––––––––––––––––––

let open = true;

function toggle(){
    // console.log('hello')
    if (open){
        unClkdArrow.classList.add('closed-arrow')
        clkd.classList.add('opened-right-arrow');
        clkd.classList.remove('.arrowZ');
        navWrapAbout.classList.add('rightAni')
        navWrapContact.classList.add('rightAni')
        navHoloSmall.classList.add('navAni');
        Logo.classList.add('navAni');
        Logo.classList.remove('logoAni');
        wholeNav.classList.add('fixedMenu')        
    } else {
        unClkdArrow.classList.remove('closed-arrow')
        clkd.classList.remove('opened-right-arrow')
        clkd.classList.add('.arrowZ');
        navWrapAbout.classList.remove('rightAni')
        navWrapContact.classList.remove('rightAni')
        navHoloSmall.classList.remove('navAni');
        Logo.classList.remove('navAni');
        Logo.classList.add('logoAni');
        wholeNav.classList.remove('fixedMenu')
    }
    open = !open
}

const unClkdButton = document.getElementById('button')

unClkdButton.addEventListener('click', toggle)

const clkdButton = document.getElementById('clkd_button')

clkdButton.addEventListener('click', toggle)