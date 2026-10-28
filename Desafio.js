
let saldo = 1000;

document.getElementById("executar").addEventListener("click", function() {

  let operacao = document.getElementById("operacao").value;
  let valor = Number(document.getElementById("valor").value);
  let resultado = document.getElementById("resultado");

  switch(operacao) {

  case "consultar":
    resultado.textContent = "Seu saldo é R$ " + saldo;
    break;

  case "depositar":
    if(valor > 0 && Number.isInteger(valor) && document.getElementById("valor").value != "") {
      saldo = saldo + valor;
      resultado.textContent = "Deposito realizado! Novo saldo: R$ " + saldo;
    } else {
      resultado.textContent = "Valor invalido";
    }
    break;

  case "sacar":
    if(valor <= 0 || !Number.isInteger(valor) || document.getElementById("valor").value == "") {
      resultado.textContent = "Valor invalido";
    } else if(valor % 10 != 0) {
      resultado.textContent = "O saque deve ser multiplo de 10";
    } else if(valor > saldo) {
      resultado.textContent = "Saldo insuficiente";
    } else {
      saldo = saldo - valor;

      let restante = valor;
      let nota100 = 0;
      let nota50 = 0;
      let nota20 = 0;
      let nota10 = 0;

      while(restante >= 100) {
        nota100++;
        restante = restante - 100;
      }

      while(restante >= 50) {
        nota50++;
        restante = restante - 50;
      }

      while(restante >= 20) {
        nota20++;
        restante = restante - 20;
      }

      while(restante >= 10) {
        nota10++;
        restante = restante - 10;
      }

      resultado.textContent = "Saque realizado! Notas de 100: " + nota100 +
      ", de 50: " + nota50 + ", de 20: " + nota20 +
      ", de 10: " + nota10 + ". Saldo restante: R$ " + saldo;
    }
    break;

  case "extrato":
    resultado.textContent = "Extrato: Saldo atual: R$ " + saldo;
    break;
  }

  document.getElementById("saldo").textContent = "Saldo: R$ " + saldo;

});
