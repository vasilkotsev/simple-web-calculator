let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerText === "x2") {
      return (display.innerText = display.innerText * display.innerText);
    }

    if (event.target.innerText === "C") {
      return (display.innerText = "");
    }

    if (event.target.innerText === "←") {
      return (display.innerText = display.innerText.slice(0, -1));
    }

    if (event.target.innerText === "=") {
      try {
        return (display.innerText = eval(display.innerText));
      } catch (e) {
        return (display.innerText = "Error!");
      }
    }
    display.innerText += event.target.innerText;
  });
});
