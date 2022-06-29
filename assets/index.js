import MediaPlayer from './MediaPlayer.js';

const video = document.querySelector('video');
const button = document.getElementById('playButton');
//const buttonPause = document.getElementById('PauseButton');
const player = new MediaPlayer( {el: video} );

//button.onclick = () => player.play();
button.onclick = () => player.togglePlay();
//buttonPause.onclick = () => player.pause();
