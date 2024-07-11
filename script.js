let events = document.querySelectorAll(".faq");
events.forEach((b) => {
  let ans = b.querySelector(".answer");
  let icon = b.querySelector(".image")
  b.addEventListener("click", () => {
    ans.classList.toggle('active')
    icon.classList.toggle('active')

  });
});

