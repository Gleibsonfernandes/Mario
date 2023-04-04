let mario = document.querySelector('.mario');

const jump = () =>{
    mario.classList.add('pulo')

    setTimeout(() =>{
        mario.classList.remove('pulo'); 
    }, 500); 
}

document.addEventListener('keydown', jump);

