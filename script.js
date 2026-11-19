const texto_progresso = document.querySelector("#texto-progresso")
const barra_preenchimento = document.querySelector("#barra-preenchimento")
const body = document.body
const btn_energia = document.querySelector("#btn-energia")
const modulo = document.querySelector(".modulo")
const modulo_txt = document.querySelector("#modulo-energia p")


let progressoAtual = 0

btn_energia.addEventListener('click', () => {
    
    body.classList.toggle("energia-restaurada")
  
    if(body.classList.contains("energia-restaurada")){
        btn_energia.style.backgroundColor = "green"
        btn_energia.textContent = "Energia estavel"
        modulo_txt.textContent = "O sistema está operando em energia total"

    }else{
        btn_energia.style.backgroundColor = "red"
        btn_energia.textContent = "Restaurar Energia"
        modulo_txt.textContent = "O sistema está operando em energia reduzida."
    }

    

})

const area_rastreio = document.querySelector("#area-rastreio");
const cord_x = document.querySelector("#coord-x");
const cord_y = document.querySelector("#coord-y");

area_rastreio.addEventListener("mousemove", (event) => {
  cord_x.textContent = event.offsetX;
  cord_y.textContent = event.offsetY;
});

area_rastreio.addEventListener("mouseleave",() =>{
    cord_x.textContent = 0
    cord_y.textContent = 0
})

let imgEscudo = document.querySelector("#img-escudo")
let botoesAlerta = document.querySelectorAll(".btn-alerta")

botoesAlerta.forEach((botao)=> {
    botao.addEventListener('click', ()=>{
        const cor = botao.getAttribute("data-cor")
        const status = botao.getAttribute("data-status")

        imgEscudo.setAttribute('src',`https://placehold.co/150x150/${cor}/white?text=${status}`)
        imgEscudo.setAttribute('alt',`Escudo em modo ${status}`)
    })
})


const menssagem = document.querySelector("#input-mensagem")
const transmissao = document.querySelector("#visor-transmissao")

menssagem.addEventListener('input', (event)=>{ 
    transmissao.textContent = event.target.value
}) 

const senha = "iago"


const caixa_tentaiva = document.querySelector("#input-senha")
const botao_verificacao = document.querySelector("#btn-autenticar")
const acesso = document.querySelector("#msg-acesso")

botao_verificacao.addEventListener('click', () =>{
    if (caixa_tentaiva.value == senha){
        acesso.textContent = "acesso permitido comandante"
        acesso.classList.add("status-sucesso")
    }else{
        acesso.textContent = "acesso negado intruso dectetado"
        acesso.classList.add("status-erro")
    }
})

const temperatura = document.querySelector("#valor-temp")
const simular = document.querySelector("#btn-aquecer")
const ativar = document.querySelector("#btn-resfriar")

simular.addEventListener('click', () =>{
    const atual = Number(temperatura.textContent)
})