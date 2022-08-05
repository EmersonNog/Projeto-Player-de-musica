let musics = [
    {
        title: 'As You Fade Away', 
        artistic: 'NEFFEX', 
        src: 'src/assets/music/As You Fade Away - NEFFEX.mp3', 
        img: 'src/assets/imagem/1 - As you.jpg',
        cell: 'src/assets/imagem/celular.png',
        cam: 'src/assets/imagem/cam.png'
    },

    {
        title: 'Go!', 
        artistic: 'NEFFEX', 
        src: 'src/assets/music/Go! - NEFFEX.mp3', 
        img: 'src/assets/imagem/2 - Go.jpg',
        cell: 'src/assets/imagem/celular.png',
        cam: 'src/assets/imagem/cam.png'
    },

    {
        title: 'The Itch', 
        artistic: 'NEFFEX', 
        src: 'src/assets/music/The Itch - NEFFEX.mp3', 
        img: 'src/assets/imagem/3- Itch.jpg',
        cell: 'src/assets/imagem/celular.png',
        cam: 'src/assets/imagem/cam.png'
    }
];

let music = document.querySelector("audio");
let indexMusic = 0;
let durationMusic = document.querySelector(".fim");

let imagem = document.querySelector("#img_player");
let celular = document.querySelector(".celular");
let camera = document.querySelector(".camera");
let name_music = document.querySelector(".descricao h2");
let name_artistic = document.querySelector(".descricao i");

//eventos
document.querySelector(".btn-play").addEventListener('click', playMusic);

document.querySelector(".btn-pause").addEventListener('click', pauseMusic);

music.addEventListener("timeupdate", attBar);

window.onload = duration;

document.querySelector(".anterior").addEventListener('click', () => {
    indexMusic--;
    if(indexMusic < 0) {
        indexMusic = 2;
    }
    renderMusic(indexMusic);
    playMusic();
});

document.querySelector(".proxima").addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 2) {
        indexMusic = 0;
    }
    renderMusic(indexMusic);
    playMusic();
});

//funcoes
function renderMusic(index) {
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        name_music.textContent = musics[index].title;
        name_artistic.textContent = musics[index].artistic;
        imagem.src = musics[index].img;
        celular = musics[index].cell;
        camera = musics[index].cam;
        durationMusic.textContent = secondsToMinutes(Math.floor(music.duration));
        playMusic();
    });
}

function playMusic() {
    music.play();
    document.querySelector(".btn-pause").style.display = 'block';
    document.querySelector(".btn-play").style.display = 'none';
}


function pauseMusic() {
    music.pause();
    document.querySelector(".btn-pause").style.display = 'none';
    document.querySelector(".btn-play").style.display = 'block';
}

function attBar() {
    let bar = document.querySelector("progress");
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let timeTraveled = document.querySelector(".inicio");
    timeTraveled.textContent = secondsToMinutes(Math.floor(music.currentTime));
}

function secondsToMinutes(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
}

function duration(){
    durationMusic.textContent = secondsToMinutes(Math.floor(music.duration));
}