/*Get Our Elements*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/*Build our functions*/

function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();

}

function updateButton() {
	const icon = this.paused ? '💀' : '😀';
	console.log(icon);
	toggle.textContent = icon;
	
}


function skip() {
	console.log(this.dataset.skip);


	/*https://courses.wesbos.com/account/access/5b5e4d5199ce1f5578c24f6c/view/194129583*/
	//Left off here at time = 12:28  
	video.currentTime +=
}
/*Hook up the event list */

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));