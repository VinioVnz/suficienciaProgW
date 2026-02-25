import Funcionario from "../model/funcionario.js";

class FuncionarioService {
  async getAll() {
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees",
    );

    if (response.status === 429) {
      throw new Error("Muitas requisições. Tente novamente mais tarde.");
    }

    if (!response.ok) {
      throw new Error("Erro na API: " + response.status);
    }
    const data = await response.json();

    return data.data.map((f) => new Funcionario(f.id, f.employee_name, f.employee_salary, f.employee_age));
  }

  async create(dados) {
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      },
    );

    const data = await response.json();

    return new Funcionario(data.id, data.name, data.salary, data.age);
  }
}

export default new FuncionarioService();
