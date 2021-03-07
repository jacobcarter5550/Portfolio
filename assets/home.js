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

const farRightBall = document.querySelector('.navBallW')

const email = document.querySelector('.navEmail')

const navPortfo = document.querySelector('.navPortfo')

const linkedin = document.querySelector('.navLinked')

const insta = document.querySelector('.navInsta')


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
        farRightBall.classList.add('ballAni', 'opt')
        email.classList.add('farRightAni')
        navPortfo.classList.add('farRightAni')
        linkedin.classList.add('farRightAni')
        insta.classList.add('farRightAni')   
        farRightBall.classList.remove('ballAniOut')
        email.classList.remove('farRightAniOut')
        navPortfo.classList.remove('farRightAniOut')
        linkedin.classList.remove('farRightAniOut')
        insta.classList.remove('farRightAniOut')
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
        farRightBall.classList.remove('ballAni', 'opt')
        email.classList.remove('farRightAni')
        navPortfo.classList.remove('farRightAni')
        linkedin.classList.remove('farRightAni')
        insta.classList.remove('farRightAni')
        farRightBall.classList.add('ballAniOut')
        email.classList.add('farRightAniOut')
        navPortfo.classList.add('farRightAniOut')
        linkedin.classList.add('farRightAniOut')
        insta.classList.add('farRightAniOut')
    }
    open = !open
}

const unClkdButton = document.getElementById('button')

unClkdButton.addEventListener('click', toggle)

const clkdButton = document.getElementById('clkd_button')

clkdButton.addEventListener('click', toggle)


farRightBall.addEventListener('click', toggle)
