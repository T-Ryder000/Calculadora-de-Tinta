const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')
const btnCalcular = document.querySelector('#calcular')
const btnLimpar = document.querySelector('#limpar')
const containerResultado = document.querySelector(".resultado")

let textResultado = '' ;
let x = largura
let y = altura

// Local de processamento

let calcValor = ()=>{ /// Função responsável pelos calculos e entrega de resultados.
  let area = x.value * y.value
  let baldes = parseFloat((area * 0.37).toFixed(2))
  inserirResultado(baldes)
  limparInputs(x, y)
}


let inserirResultado = (baldes)=>{ ///Função responsável por pegar o resultado e armazena-lo.
  const resultado = `Você precisará de ${baldes} baldes de tinta para pintar essa parede.`
  textResultado = document.querySelector('.textResultado')
  textResultado.innerHTML = resultado
  localStorage.setItem('chave', JSON.stringify(resultado));
}


let mostrarResultado = ()=>{  /// Função responsável por puxar e mostrar o resultado na tela.
  let usuarioArmazenado = localStorage.getItem('chave');
  textResultado = document.querySelector('.textResultado')
  usuarioArmazenado = JSON.parse(usuarioArmazenado);
  
  if (usuarioArmazenado) {
    textResultado.innerHTML = usuarioArmazenado;
    console.log(usuarioArmazenado);
  }
}


// Local de limpeza

const limparInputs = (x, y) =>{ ///Limpa os inputs após o click do botão limpar.
  x.value = ''
  y.value = ''
}
const limparContainer= ()=>{ ///Trás o container "resultado" ao seu estado primario novamente.
  const resultado = `Aqui aparecerá o resultado de seu cálculo, indicando quantos baldes de tinta serão necessários para pintar a parede.`
  textResultado = document.querySelector('.textResultado')
  textResultado.innerHTML = resultado
}


const limparGeral = ()=>{ /// Chama todas as funções responsáveis pelo reset.
  limparInputs(x, y)
  limparContainer()
  localStorage.clear()
}


// Local de comando

btnCalcular.addEventListener('click', calcValor)
btnLimpar.addEventListener('click', limparGeral)
document.addEventListener('DOMContentLoaded', mostrarResultado)  /// Chama a função responsavél por mostrar o armazenamento logo após o recarregamento da pagina.


