console.log('hell0')

// Directory––––––––––––––––––––––––––––––––––
const downArrow = document.querySelector('.down_arrow')

const unClkdArrow = document.getElementById('nav_arrow')

const unClkdBall = document.getElementById('ball');

const clkd = document.querySelector('.nav_clkd');

const navRightSide = document.querySelector('.nav_rightside');

const navLeftSide = document.querySelector('.nav_leftside');

const navWrapAbout = document.querySelector('.navWrapperAbout');

const navWrapContact = document.querySelector('.navWrapperContact');

const navHoloSmall = document.getElementById('nav_holo');

const Logo = document.querySelector('.nav_logo');

const navLongHolo = document.querySelector('.nav_holo_long')

const navPhoto = document.querySelector('.navPhoto');

const navVid = document.querySelector('.navVid');

const navWeb = document.querySelector('.navWeb')

const navDesi = document.querySelector('.navDesi');

const navWrit = document.querySelector('.navWrit');

const navArt = document.querySelector('.navArt');

const ballAndBar = document.querySelector('.clkd_long')

const wholeNav = document.querySelector('.nav_container')
// Toggle––––––––––––––––––––––––––––––––––

let open = true;

function toggle(){
    console.log('hello')
    if (open){
        unClkdArrow.classList.add('closed-arrow')
        unClkdBall.classList.add('closed-ball')
        clkd.classList.add('opened-right-arrow');
        clkd.classList.remove('.arrowZ');
        navWrapAbout.classList.add('rightAni')
        navWrapContact.classList.add('rightAni')
        navHoloSmall.classList.add('navAni');
        Logo.classList.add('navAni');
        Logo.classList.remove('logoAni');
        navLongHolo.classList.add('navAni')
        navPhoto.classList.add('leftAni')
        navVid.classList.add('leftAni')
        navWeb.classList.add('leftAni')
        navDesi.classList.add('leftAni')
        navWrit.classList.add('leftAni')
        navArt.classList.add('leftAni')
        ballAndBar.classList.remove('default');
        wholeNav.classList.add('fixedMenu')
        navPhoto.classList.remove('closedAni')
        navVid.classList.remove('closedAni')
        navWeb.classList.remove('closedAni')
        navDesi.classList.remove('closedAni')
        navWrit.classList.remove('closedAni')
        navArt.classList.remove('closedAni')
        downArrow.classList.add('downArrowOpac')
        downArrow.classList.remove('downArrowOpacfix')
        
    } else {
        unClkdArrow.classList.remove('closed-arrow')
        unClkdBall.classList.remove('closed-ball')
        clkd.classList.remove('opened-right-arrow')
        clkd.classList.add('.arrowZ');
        navWrapAbout.classList.remove('rightAni')
        navWrapContact.classList.remove('rightAni')
        navHoloSmall.classList.remove('navAni');
        Logo.classList.remove('navAni');
        Logo.classList.add('logoAni');
        navLongHolo.classList.remove('navAni')
        navPhoto.classList.remove('leftAni')
        navVid.classList.remove('leftAni')
        navWeb.classList.remove('leftAni')
        navDesi.classList.remove('leftAni')
        navWrit.classList.remove('leftAni')
        navArt.classList.remove('leftAni')
        ballAndBar.classList.add('default');
        wholeNav.classList.remove('fixedMenu')
        navPhoto.classList.add('closedAni')
        navVid.classList.add('closedAni')
        navWeb.classList.add('closedAni')
        navDesi.classList.add('closedAni')
        navWrit.classList.add('closedAni')
        navArt.classList.add('closedAni')
        downArrow.classList.remove('downArrowOpac')
        downArrow.classList.add('downArrowOpacfix')
    }
    open = !open
}

const unClkdButton = document.getElementById('button')

unClkdButton.addEventListener('click', toggle)

const clkdButton = document.getElementById('clkd_button')

clkdButton.addEventListener('click', toggle)