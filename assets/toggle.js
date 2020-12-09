console.log('hell0')

// const unClkd = document.querySelector('.nav_un_clkd');

const unClkdArrow = document.getElementById('nav_arrow')

const unClkdBall = document.getElementById('ball')

const clkd = document.querySelector('.nav_clkd');


let open = true;

function toggle(){
    console.log('hello')
    if (open){
        unClkdArrow.classList.add('closed-arrow')
        unClkdBall.classList.add('closed-ball')
        clkd.classList.add('opened-right-arrow')

    } else {
        unClkdArrow.classList.remove('closed-arrow')
        unClkdBall.classList.remove('closed-ball')
        clkd.classList.remove('opened-right-arrow')
        // unClkdArrow.style.display = 'block';
    }
    open = !open
}

const unClkdButton = document.getElementById('button')

unClkdButton.addEventListener('click', toggle)

const clkdButton = document.getElementById('clkd_button')

clkdButton.addEventListener('click', toggle)