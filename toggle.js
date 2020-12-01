console.log('hell0')

const unClkd = document.querySelector('.nav_un_clkd');

const clkd = document.querySelector('.nav_clkd');


let open = true;

function toggle(){
    console.log('hello')
    if (open){
        clkd.style.display = 'block';
        unClkd.style.display = 'none';
    } else {
        clkd.style.display = 'none';
        unClkd.style.display = 'block';
    }
    open = !open
}

const unClkdButton = document.getElementById('button')

unClkdButton.addEventListener('click', toggle)

const clkdButton = document.getElementById('clkd_button')

clkdButton.addEventListener('click', toggle)