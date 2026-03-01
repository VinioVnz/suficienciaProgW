export default function renderizarTabela(lista) {
  const tbody = document.querySelector("tbody");

  tbody.innerHTML = "";

  lista.forEach(funcionario => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${funcionario.id}</td>
      <td>${funcionario.name}</td>
      <td>R$ ${funcionario.salary}</td>
      <td>${funcionario.age}</td>
      <td>
        <button data-id="${funcionario.id}" class="btn-excluir">
          Excluir
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}