//variables section
const themeSwitcher = document.querySelector(`#theme-switcher`)
const container = document.querySelector(`.container`)
const containerTwo = document.querySelector(`.input_area`)

let mode = 'light';
// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    
  }
  // If mode is light, apply dark background
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
    
  }
});




