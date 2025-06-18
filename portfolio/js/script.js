// Sample projects array
const projects = [
  {
    title: "Tic Tac Toe Game",
    description: "A fun and simple tic tac toe game built with HTML, CSS, and JavaScript."
  },
  {
    title: "Calculator App",
    description: "A basic calculator supporting operations like +, -, *, and /."
  },
  {
    title: "Portfolio Website",
    description: "A personal website showcasing my projects and skills."
  }
];

// Dynamically add projects to the page
window.onload = () => {
  const projectList = document.querySelector(".project-list");

  projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(div);
  });
};

// Handle contact form submission
function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
}
