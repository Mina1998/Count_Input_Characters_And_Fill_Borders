let input = document.querySelector("input");
let progress = document.querySelector(".progress");
let count = document.querySelector(".count");
let maxLength = parseInt(input.getAttribute("maxlength"));

count.innerHTML = input.getAttribute("maxlength");
input.oninput = function () {
    let leftCounter = maxLength - this.value.length;
    count.innerHTML = leftCounter;
    if (leftCounter === 0) {
        count.classList.add("zero");
    } else {
        count.classList.remove("zero");
    }
    let progressWidth = this.value.length/maxLength*100;
    progress.style.width = `${progressWidth}%`;
    if (leftCounter === 0) {
        progress.classList.add("zero-progress");
    } else {
        progress.classList.remove("zero-progress");
    }
};