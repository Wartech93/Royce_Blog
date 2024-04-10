
const backButton = document.querySelector("#back_button");

backButton.addEventListener(`click`, function(event) {
location.href="./index.html"
}
);

const displayNewPost = function () {
    const stringContent = localStorage.getItem('allPosts');
    const newContent = JSON.parse(stringContent);
    const spot = document.querySelector('.posting');

    for (i = 0; i < newContent.length; i++) {
//create a div element
const div = document.createElement("div");
//create a h1 element
const title = document.createElement("h1");
//create a p element
const content = document.createElement("p");
//create an h2 element
const author = document.createElement("h2");

//text content of h1 = newContent[i].title
title.textContent = newContent[i].Title;
//text content of p = newContent[i].contenet
content.textContent = newContent[i].Content;
//text content of h2 = newContent[i].username
author.textContent = newContent[i].Author;

div.setAttribute("class", "post");
//add class to h1
title.setAttribute("class", "title");
//add class to p
content.setAttribute("class", "content");
//add class to h2
author.setAttribute("class", "author");

//append h1 to div
div.append(title);
//append p to div
div.append(content);
//append h2 to div
div.append(author);

//append div to page

spot.append(div);
 };

}
displayNewPost();
