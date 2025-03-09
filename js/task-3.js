const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
   const elm = event.currentTarget;

if (elm.value.trim()) {
    nameOutput.textContent = elm.value.trim();
} else {
    nameOutput.textContent = "Anonymous";
}
  });