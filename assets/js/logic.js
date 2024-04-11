//variables section
const themeSwitcher = document.querySelector(`#theme-switcher`);
const container = document.querySelector(`.container`);
const backGround = document.querySelector(`.background`);
const darkMode = document.querySelector('#theme-switcher');
const moonControl = document.querySelector('#theme-switcher');
const moonColor = document.querySelector('.moon-control');
let mode = 'light';
// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    
  }
  
  else {
    mode === 'light';
    container.setAttribute('class', 'light');
    
  }
});

let modeTwo = 'on';
darkMode.addEventListener('click', function() {
  // controlling css outside of switch area;
if (modeTwo === 'on') {
modeTwo = 'off';
backGround.setAttribute('class', 'off');
}
else {
  modeTwo = 'on';
  backGround.setAttribute('class', 'on');
  }
});

let modeThree = 'enable';
moonColor.addEventListener('click', function() {
  //controlling moon color
  if (modeThree === 'enable') {
    modeThree = 'disable' 
    moonControl.setAttribute('class', 'disable');
  }
  else {
    modeThree = 'enable';
    moonControl.setAttribute('class', 'enable');
  }
  }
);


