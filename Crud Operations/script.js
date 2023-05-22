// CRUD--
// -CRUD refers to the four basic operations a software applications should be able to perform such as Create, Read, Update and Delete.
// -It is a type of mechanism that allows you to create data, read data, edit it & delete those data.
// -With CRUD, we can perform most common tasks of data management such as creating new records, retrieving existing records, updating or modifying records and deleting records.

let form = document.getElementById("form"); //taking input from HTML
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (event) => {  //submit event listener
    event.preventDefault();
    console.log("Button Clicked");
    formValidation();
});

let formValidation = () => { //preventing the form by submitting blank
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("Failure");
    } else {
        console.log("Success");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};
let acceptData = () => { //accepting data from input fields
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {  //creating post
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this);" class="fas fa-edit"></i>
        <i onClick="deletePost(this);" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
};

let deletePost = (e) => { //deleting a post
    e.parentElement.parentElement.remove();
};

let editPost = (e) => { //updating our post
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};