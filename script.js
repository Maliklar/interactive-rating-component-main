const ratingModal = document.getElementById("rating-modal");
const thanksModal = document.getElementById("thanks-modal");
const ratingValue = document.getElementById("rating-value");
let USER_RATING = null;

function updateRating(ele) {
    if (USER_RATING == null) {
        ele.classList.add("active");
        USER_RATING = ele;
    } else {
        USER_RATING.classList.remove("active");
        ele.classList.add("active");
        USER_RATING = ele;
    }
}

function submit() {
    if (USER_RATING != null) {
        ratingModal.style.display = "none";
        thanksModal.style.display = "flex";
        ratingValue.innerHTML = USER_RATING.dataset.value;
    }
}