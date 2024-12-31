// Selecionando elementos do DOM
let seg = document.querySelector('.seguidor')
let clickercusto = document.querySelector('.custo-click')
let clickerlvl = document.querySelector('.clickerlvl')
let incremento = document.querySelector('.incremento')
let sgCTexto = document.getElementById("sgC_txt")
let sgSTexto = document.getElementById("sgS_txt")

let segundo_upgrade_custo = document.querySelector('.segundo_upgrade_custo')
let Segundo_upgrade_clickerlvl = document.querySelector('.Segundo_upgrade_clickerlvl')
let Segundo_upgrade_incremento = document.querySelector('.Segundo_upgrade_incremento')

// Valores iniciais
let sgC = 1; // Valor do clique
let sgS = 0; // Valor do incremento automático

// Conversões dos valores iniciais para número
let segundo_upgrade_custoConvertido = parseFloat(segundo_upgrade_custo.innerHTML)
let Segundo_upgrade_incrementoConvertido = parseFloat(Segundo_upgrade_incremento.innerHTML)
let clickercustoConvertido = parseFloat(clickercusto.innerHTML)
let segConvertido = parseFloat(seg.innerHTML)
let incrimentoConvertido = parseFloat(incremento.innerHTML)

// Função do clique manual
function incrementoSeg(){
    seg.innerHTML = Math.round(segConvertido += sgC)
}

// Função do primeiro upgrade
function Comprarclicker() {
    if (segConvertido >= clickercustoConvertido) {
        seg.innerHTML = Math.round(segConvertido -= clickercustoConvertido);
    
        clickerlvl.innerHTML++;

        incrimentoConvertido = parseFloat((incrimentoConvertido * 1.03).toFixed(2));
        incremento.innerHTML = incrimentoConvertido
        sgC += incrimentoConvertido;

        clickercustoConvertido *= 1.10
        clickercusto.innerHTML = Math.round(clickercustoConvertido)
    }
}

// Função do segundo upgrade (corrigida)
function ComprarSegundoUpgrade() {
    if (segConvertido >= segundo_upgrade_custoConvertido) {
        // Subtrai o custo do upgrade dos seguidores
        seg.innerHTML = Math.round(segConvertido -= segundo_upgrade_custoConvertido);
    
        // Aumenta o nível do upgrade
        Segundo_upgrade_clickerlvl.innerHTML++;

        // Aumenta o valor do incremento em 3%
        Segundo_upgrade_incrementoConvertido = parseFloat((Segundo_upgrade_incrementoConvertido * 1.03).toFixed(2));
        Segundo_upgrade_incremento.innerHTML = Segundo_upgrade_incrementoConvertido;
        sgS += Segundo_upgrade_incrementoConvertido;

        // Aumenta o custo do próximo upgrade em 20%
        segundo_upgrade_custoConvertido *= 1.15;
        segundo_upgrade_custo.innerHTML = Math.round(segundo_upgrade_custoConvertido);
    }
}



setInterval(() => {
    segConvertido += sgS /10
    seg.innerHTML = Math.round(segConvertido)
    sgCTexto.innerHTML = Math.round(sgC)
    sgSTexto.innerHTML = Math.round(sgS)

}, 1000)


// Configuração do volume do áudio

const audioElement = document.getElementById('audio'); 
audioElement.volume = 0.01; 

