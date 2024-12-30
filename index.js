let seg = document.querySelector('.seguidor')
let clickercusto = document.querySelector('.custo-click')
let clickerlvl = document.querySelector('.clickerlvl')
let incremento = document.querySelector('.incremento')
let sg = 1;


let clickercustoConvertido = parseFloat(clickercusto.innerHTML)
let segConvertido = parseFloat(seg.innerHTML)
let incrimentoConvertido = parseFloat(incremento.innerHTML)



////////////////////////////////////////////////////////////////////

function incrementoSeg(){
    seg.innerHTML = Math.round(segConvertido += sg)
}

function Comprarclicker() {
   
    if (segConvertido >= parseFloat(clickercusto.innerHTML)) {
        // Subtrai o custo dos seguidores
        segConvertido -= parseFloat(clickercusto.innerHTML);
        seg.innerHTML = Math.round(segConvertido);

    
        clickerlvl.innerHTML++;

        incrimentoConvertido =(incrimentoConvertido * 1.03.toFixed(2));
        incremento.innerHTML = incrimentoConvertido.toFixed(2);

       
        sg += incrimentoConvertido;

        clickercustoConvertido *= 1.20
        clickercusto.innerHTML = Math.round(clickercustoConvertido)
    }
}

const audioElement = document.getElementById('audio'); 
audioElement.volume = 0.01; 