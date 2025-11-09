const bubbleBtn = document.querySelector(".js-close-bubble");
const bubbleBlock = document.querySelector(".bubble");
const paymentItem = document.querySelectorAll(".footer__payment-item");

bubbleBtn.addEventListener("click", function () {
  bubbleBlock.style.display = "none";
});
