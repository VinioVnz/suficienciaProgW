import FuncionarioService from "../service/funcionario_service.js";
import renderizarTabela from "../view/view.js";

export const state = {
  allEmployees: [],
  actualPage: 0,
  forPage: 10,
};

const btnMais = document.getElementById("btn-mais");
const btnVoltar = document.getElementById("btn-voltar");

const renderPage = {
  _atualizarBotoes() {
    const totalPaginas = Math.ceil(state.allEmployees.length / state.forPage);
    btnVoltar.style.display = state.actualPage <= 1 ? "none" : "block";
    btnMais.style.display = state.actualPage >= totalPaginas ? "none" : "block";
  },

  _renderizarPaginaAtual() {
    const inicio = (state.actualPage - 1) * state.forPage;
    const fim = inicio + state.forPage;
    const fatia = state.allEmployees.slice(inicio, fim);
    renderizarTabela(fatia);
  },

  async proximo() {
    if (state.allEmployees.length === 0) {
      state.allEmployees = await FuncionarioService.getAll();
    }
    state.actualPage++;
    this._renderizarPaginaAtual();
    this._atualizarBotoes();
  },

  anterior() {
    if (state.actualPage <= 1) return;
    state.actualPage--;
    this._renderizarPaginaAtual();
    this._atualizarBotoes();
  },
};

export default renderPage;

btnMais.addEventListener("click", () => renderPage.proximo());
btnVoltar.addEventListener("click", () => renderPage.anterior());