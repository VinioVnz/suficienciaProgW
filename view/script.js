import Controller from "../controller/controller.js";
const buttons = document.querySelectorAll("nav button");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    pages.forEach(page => page.classList.remove("active"));

    const target = button.dataset.page;

    document.getElementById(target).classList.add("active");
  });
});


document.getElementById("form-criar").addEventListener("submit", Controller.criar)

/* document.addEventListener("DOMContentLoaded", () => {
  Controller.carregarLista();
}); */