const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", sendSubmit);

function sendSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    
    if (email === "" || password === "") {
      return console.log("All form fields must be filled in");
    }

    const str = `Email: ${email}, Password: ${password}`;
    const result = str.split(",").reduce
  
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
}
