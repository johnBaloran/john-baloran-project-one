// Get appropriate DOM Nodes
const article = document.querySelector(".article");
const submitForm = document.querySelector(".formButton");
const field = document.querySelector("textarea");
const name = document.getElementById("name");
const email = document.getElementById("email");

const allComments = [];
submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  // condition for comment to be posted: every input must be filled
  if (name.value === "" || email.value === "" || field.value === "") return;
  // get information from form and put it in an object
  const commentObj = {
    name: name.value,
    email: email.value,
    comment: field.value,
    time: new Date().toISOString().slice(0, 10),
  };
  // push object in the comments array
  allComments.push(commentObj);
  // create a comment section
  const commentBox = document.createElement("div");
  commentBox.classList.add("commentBox");
  commentBox.innerHTML = "";

  // loop through comments array
  allComments.forEach((comment) => {
    // use object information to make one comment and put in comment section
    commentBox.innerHTML = `   <p class="commentEmail">
    ${comment.email} <span class="commentName">(${comment.name})</span>
  </p>
  <p class="commentDate">${comment.time}</p>
  <p class="comment">
    ${comment.comment}
  </p>`;
    // put comment section at the bottom of the article
    article.appendChild(commentBox);
  });
});
