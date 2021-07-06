function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  return a / b;
}

function calcular(a, b, tipo) {
  let resultado;

  switch (tipo) {
    case "somar":
      resultado = somar(a, b);
      break;

    case "multiplicar":
      resultado = multiplicar(a, b);
      break;

    case "subtrair":
      resultado = subtrair(a, b);
      break;

    case "dividir":
      resultado = dividir(a, b);
      break;

    default:
      resultado = "Não Selecionou o tipo";
  }

  print(resultado);
}

function init() {
  a = "";
  b = "";
  tipo = "";
  resultado = 0;
  print(resultado);
}

function print(valor) {
  const valorExibido = converterPontoParaVirgula(valor.toString());
  document.querySelector("#resultado").innerHTML = valorExibido;
}

function verificarVirgula(valor, variavel) {
  if (valor == "," && variavel.indexOf(",") != -1) {
    variavel;
  }
  return variavel + valor;
}

function injetarValor(valor) {
  if (!tipo) {
    a = verificarVirgula(valor, a);
    print(a);
  } else {
    b = verificarVirgula(valor, b);
    print(b);
  }
}

function injetarTipo(valor) {
  tipo = valor;
}

function converterVirgulaParaPonto(valor) {
  return valor.replace(",", ".");
}

function converterPontoParaVirgula(valor) {
  return valor.replace(".", ",");
}

function chamarResultado() {
  if (a == "" || b == "") {
    resultado = 0;
    return print(resultado);
  }
  let valor1 = parseFloat(converterVirgulaParaPonto(a));
  let valor2 = parseFloat(converterVirgulaParaPonto(b));
  let tipoOperacao = tipo;
  a = "";
  b = "";
  tipo = "";
  calcular(valor1, valor2, tipoOperacao);
}

let a, b, tipo, resultado;

document.body.onload = init;
