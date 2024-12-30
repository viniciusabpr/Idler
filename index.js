let seg = document.querySelector('.seguidor')
let clickercusto = document.querySelector('.custo-click')
let clickerlvl = document.querySelector('.clickerlvl')
let incremento = document.querySelector('.incremento')

let segundo_upgrade_custo = document.querySelector('.segundo_upgrade_custo') // sera alterado para o nome do upgrade
let Segundo_upgrade_clickerlvl = document.querySelector('.Segundo_upgrade_clickerlvl')// sera alterado para o nome do upgrade
let Segundo_upgrade_incremento = document.querySelector('.Segundo_upgrade_incremento')// sera alterado para o nome do upgrade

let sgC = 1;
let sgS = 0;


// conversões 
let segundo_upgrade_custoConvertido = parseFloat(segundo_upgrade_custo.innerHTML)// sera alterado para o nome do upgrade
let Segundo_upgrade_incrementoConvertido = parseFloat(Segundo_upgrade_incremento.innerHTML)// sera alterado para o nome do upgrade

let clickercustoConvertido = parseFloat(clickercusto.innerHTML)
let segConvertido = parseFloat(seg.innerHTML)
let incrimentoConvertido = parseFloat(incremento.innerHTML)




//Funções 

function incrementoSeg(){
    seg.innerHTML = Math.round(segConvertido += sgC)
}

function Comprarclicker() {
   
    if (segConvertido >= clickercustoConvertido) {
        seg.innerHTML = Math.round(segConvertido -= clickercustoConvertido);

    
        clickerlvl.innerHTML++;

        incrimentoConvertido = parseFloat((incrimentoConvertido * 1.03).toFixed(2));
        incremento.innerHTML = incrimentoConvertido
        sgC += incrimentoConvertido;

        clickercustoConvertido *= 1.20
        clickercusto.innerHTML = Math.round(clickercustoConvertido)
    }
}



function ComprarSegundoUpgrade() {
   
    if (segConvertido >= segundo_upgrade_custoConvertido ) {
        seg.innerHTML = Math.round(segConvertido -=  segundo_upgrade_custoConvertido);

    
        Segundo_upgrade_clickerlvl.innerHTML++;

        Segundo_upgrade_incrementoConvertido = parseFloat((Segundo_upgrade_incrementoConvertido * 1.03).toFixed(2));
        Segundo_upgrade_incremento.innerHTML = Segundo_upgrade_incrementoConvertido
        sgC += Segundo_upgrade_incrementoConvertido;

        clickercustoConvertido *= 1.20
        segundo_upgrade_custo.innerHTML = Math.round(segundo_upgrade_custoConvertido)
    }
}

const audioElement = document.getElementById('audio'); 
audioElement.volume = 0.01; 