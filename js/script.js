let navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", (e) => {
  e.preventDefault();

  // toggle nav state
  document.body.classList.toggle("nav-visible");
  document.querySelector(".nav-overlay").style.display = "block";

});

let navButton1 = document.querySelector(".close");

navButton1.addEventListener("click", (e) => {
  e.preventDefault();

  // toggle nav state
  document.body.classList.toggle("nav-visible");
  document.querySelector(".nav-overlay").style.display = "none";
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const progressContainer = document.querySelector('.progress-container');

// initial call
setPercentage();

function setPercentage() {
  const percentage = progressContainer.getAttribute('data-percentage') + '%';

  const progressEl = progressContainer.querySelector('.progress');
  const percentageEl = progressContainer.querySelector('.percentage');

  progressEl.style.width = percentage;
  percentageEl.innerText = percentage;
  percentageEl.style.left = percentage;
}