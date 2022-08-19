const ratings = document.querySelector(".ratings");
const btnList = document.querySelectorAll(".btn-rating");
const sumbitBtn = document.querySelector(".btn-submit");
const cardContent = document.querySelector(".card-content");
const submitContent = document.querySelector(".submit-content");
const rating = document.getElementById("rating");
let ratingValue = 0;
ratings.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-rating")) {
    btnList.forEach((btn) => {
      btn.classList.remove("gray-bg");
    });
    e.target.classList.add("gray-bg");
    ratingValue = Number(e.target.textContent);
  }
});

sumbitBtn.addEventListener("click", (e) => {
  if (ratingValue) {
    rating.textContent = ratingValue;
    cardContent.style.display = "none";
    submitContent.style.display = "block";
  } else {
    alert("Please Select a rating before submiting");
  }
});
