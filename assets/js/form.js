const userName = document.querySelector(`#user`);
const titleInput = document.querySelector(`#title_input`);
const contentInput = document.querySelector(`#content_input`);
const errorTimer = document.querySelector(`#timer`);
const submitButton = document.querySelector(`#submit`);
//timer for error
function timerError() {
    console.log("timerError");
    let error = 5; 
    errorTimer.textContent = "You have to write something!";
    const timerInterval = setInterval(function () {
        console.log("timerError");
        if (error >= 1) {
            console.log("if timerError");
            //decrement error counter
            error--;        


        }
        else {
            console.log("else timerError");
            clearInterval(timerInterval);
            };
    }, 1000);
   }



// submit button function to log post to local storage
// user post array
submitButton.addEventListener(`click`, function storeInfo(event) {
    event.preventDefault();
    const stringPost = localStorage.getItem('allPosts')
    const allPosts = JSON.parse(stringPost) || [];
    if (!userName.value || !titleInput.value || !contentInput.value) {               
        document.querySelector(`form`).reset();
        timerError();        
        return;        
    }
    else {
        let userPost = {
            Author: userName.value,
            Title: titleInput.value,
            Content: contentInput.value
           };
           console.log(userPost)
        allPosts.push(userPost);
        localStorage.setItem('allPosts', JSON.stringify(allPosts));               
        location.href="./blog.html"
    }
   
}
);



