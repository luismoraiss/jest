const Bonus = require("./index");

describe("Testa a função Bônus", () => {
  test("Verifica se o bônus de 10% é adicionado", () => {
    //Declara o valor do salário
    const salario = 10000;
    //Chama a  funcão e adiciona valor do salario
    const salarioComBonus = Bonus
    
    
    expect(salarioComBonus).toBe(11000);
  });
});
