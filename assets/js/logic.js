//variables section
const userName = document.querySelector(`#user`);
const titleInput = document.querySelector(`#title_input`)
const contentInput = document.querySelector(`#content_input`)
const submitButton = document.querySelector(`#submit`)
const themeSwitcher = document.querySelector(`#theme-switcher`)
const container = document.querySelector(`.container`)
const errorTimer = document.querySelector(`#timer`)
//timer for error
function timerError() {
    let error = 5;
    const timerInterval = setInterval(function () {
        if (error >= 1) {
            errorTimer.textContent = "You have to write something!";
            //decrement error counter
            error--;
            //reset form if a part is empty

        }
        else {
            errorTimer.textContent = "";
            clearInterval(timerInterval);
            displayMessage();
        };
    }, 1000)
}
// submit button function to log post to local storage 
submitButton.addEventListener(`click`, function (submitted) {
    submitted.preventDefault();
    // user post array
    let userPost = [];
    let post = {
        userName: userName.value,
        titleInput: titleInput.value,
        contentInput: contentInput.value
    }
    if (userName === `` || titleInput === `` || contentInput === ``) {
        document.querySelector(`.form`).reset();
        timerError();
    }
    else {
        userPost.push(post);
        localStorage.setItem(`userPost`, JSON.stringify(userPost));
        window.open("blog.html");
    }
}
);






let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});



