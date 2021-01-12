const mellen = document.querySelector('.mellen')

let ope = true;

function toggle(){
    console.log('hello')
    if (ope){
        mellen.classList.add('opacity')

    } else{
        square1.classList.remove('opacity')
    }
    ope = !ope
}

const square1 = document.getElementById('square1')

square1.addEventListener('click', toggle)

// parallaxes––––––––––––––––––––––––––––

// const images = document.querySelector('square');
// new simpleParallax(images);

const image = document.getElementsByClassName('square');
new simpleParallax(image);
