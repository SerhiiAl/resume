let ruspopUp = document.getElementById("russian");

ruspopUp.addEventListener("mouseenter", function textChange() {
  ruspopUp.innerHTML = "Russia is a terrorist state.";
  ruspopUp.style.color = "red";
});

ruspopUp.addEventListener("mouseleave", function textChange() {
  ruspopUp.innerHTML = "Russian - fluent";
  ruspopUp.style.color = "gray";
});
