import renderPage from "./paginacao_controller.js";
import FuncionarioService from "../service/funcionario_service.js";
const Controller = {
  async carregarLista() {
    try {
      await renderPage.proximo();
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  },

  async criar(event) {
    event.preventDefault();
    try {
      const name = document.getElementById("nome").value;
      const salary = document.getElementById("salario").value;
      const age = document.getElementById("idade").value;

      const dados = { name: name, salary: salary, age: age }

      const result = await FuncionarioService.create(dados)

      alert("Usuário criado com sucesso")
    } catch (error) {
      console.error(error);
      alert("Erro ao criar usuário");
    }

  }
}

export default Controller;


