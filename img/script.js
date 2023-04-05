let mario = document.querySelector('.mario');
let cano = document.querySelector('.cano');
let nuvem = document.querySelector('.nuvem');
let game_over = document.querySelector('.gameOver')

const jump = () =>{
    mario.classList.add('pulo')

    setTimeout(() =>{
        mario.classList.remove('pulo'); 
    }, 500); 
}

const loop = setInterval(() =>{
    let position_cano = cano.offsetLeft;
    let position_nuvem =nuvem.offsetLeft;
    let mario_position = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    

    let cont =0;
    
    while(Number(position_cano) <-30){
        cont = cont + 10;
        console.log(cont)
    }
    
    if(position_cano <= 60 && mario_position <52 && position_cano >0 ){
        cano.style.animation ="none";
        cano.style.left = `${position_cano}px`
        nuvem.style.animation ="none";
        nuvem.style.left = `${position_nuvem}px`
        game_over.style.display='block'

        mario.style.animation ="none";
        mario.style.bottom = `${mario_position}px`;
        mario.img ='mario_gameOver.png'
        
    }

    
    
}, 10)



document.addEventListener('keydown', jump);






