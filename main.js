let input = document.getElementsByTagName("input");
input = Array.from(input);

let sibling;
let i;

input.forEach((element) => {
  element.addEventListener("focus", function () {
    i = 0;
    sibling = this.previousElementSibling.children;
    sibling = Array.from(sibling);
    sibling.forEach((element) => {
      element.style.animationName = "upmove";
      element.style.animationDelay = `${i}ms`;
      i = i + 50;
    });
  });

  element.addEventListener("focusout", function () {
    i = 0;
    sibling = this.previousElementSibling.children;
    sibling = Array.from(sibling);
    sibling.forEach((element) => {
      element.style.animationName = "downmove";
      element.style.animationDelay = `${i}ms`;
      i = i + 50;
    });
  });
});
