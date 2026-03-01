import renderPage from "./paginacao_controller.js";
export async function carregarLista() {
  try {
    await renderPage.proximo();
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
}
