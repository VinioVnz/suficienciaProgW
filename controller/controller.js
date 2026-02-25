import FuncionarioService from "../service/funcionario_service.js";
import { renderizarTabela } from "../view/view.js";

export async function carregarLista() {
  try {
    const lista = await FuncionarioService.getAll();
    renderizarTabela(lista);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
}