
document.querySelector("#qtde").addEventListener("change", calcularOrcamento); //# pois é um ID / Manipulação do DOM (Document Object Module)
document.querySelector("#js").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_sim").addEventListener("change", calcularOrcamento)
document.querySelector("#layout_nao").addEventListener("change", calcularOrcamento)
document.querySelector("#prazo").addEventListener("change", calcularOrcamento)

function calcularOrcamento(){
    // let qtde = document.querySelector("#qtde").value;
    
    let preco = qtde.value * 100
    // let js = document.querySelector("#js").checked
    // let layout = document.querySelector("#layout_sim").checked
    // let prazo = document.querySelector("#prazo").value
  
    if (js.checked) preco *= 1.1        //Mesmo que colocar if (js = True) { preco = preco * 1.1}
    if (layout_sim.checked) preco += 500
    preco += preco*(1.1 - 0.1*prazo.value)

    
    console.log(qtde, preco)


    label_prazo.innerHTML = `Prazo (${prazo.value} semanas)`

    output.innerHTML = "R$ " + preco.toFixed(2)

}