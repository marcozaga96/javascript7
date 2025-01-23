const ul = document.getElementById("lista");
const text = document.getElementById("text");

const addLi = (ev) => {
  const newLi = document.createElement("li");
  if (text.value !== "") {
    newLi.innerText = text.value;
    newLi.addEventListener("click", (ev) => {
      newLi.classList.toggle("barra");
    });
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "❌";
    btnDelete.addEventListener("click", (ev) => {
      ul.removeChild(newLi);
    });
    newLi.appendChild(btnDelete);
    ul.appendChild(newLi);
    text.value = "";
  }
};
