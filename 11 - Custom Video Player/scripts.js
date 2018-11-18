	/*https://courses.wesbos.com/account/access/5b5e4d5199ce1f5578c24f6c/view/194129583*/


/*Get Our Elements*/

const player      = document.querySelector('.player');
const video       = player.querySelector('.viewer');
const progress    = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
const progressBar = player.querySelector('.progress__filled');
const toggle      = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges      = player.querySelectorAll('.player__slider');

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
	// console.log(this.dataset.skip);
	//parseFloat converts into a true number
	video.currentTime += parseFloat(this.dataset.skip);
}


function hangleRangeUpdate() {
	video[this.name] = this.value;
	// console.log(this.name);
	// console.log(this.value);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

//next is the "scrub"
//we are going to listen for a click on the videobar
//and wherever the click occurs

function scrub(e){
	console.log(e);
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

/*Hook up the event list */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

//MAKE THE VIDEO GO FULL SCREEN


/*
up
up
down down
left right
left right
b a
enter

*/



toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', hangleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', hangleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', () => mousedown && scrub(e));

progress.addEventListener('mousedown', () => mousedown => true);
progress.addEventListener('mouseup', () => mousedown => false);