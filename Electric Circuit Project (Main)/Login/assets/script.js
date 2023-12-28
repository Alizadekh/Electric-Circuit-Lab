const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const signUpBtn = document.getElementById("SignUpBtn");
const studentname = document.querySelector(".SignUpName");
const email = document.getElementById("SignUpEmail");
const pass = document.getElementById("SignUpPass");
const group = document.getElementById("SignUpGroup");
const students = [];

signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);

signUpBtn.addEventListener("click", () => {
  students.push({
    name: studentname.value,
    email: email.value,
    password: pass.value,
    group: group.value,
  });
  console.log(students);
});
