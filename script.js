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


const inputTarefa = document.getElementById("input-tarefa")
const btnAddTarefa = document.getElementById("btn-add-tarefa")
const listaTarefas = document.getElementById("lista-tarefas")

btnAddTarefa.addEventListener('click', () => {
    if (inputTarefa.value.trim() === "") return

    const novaTarefa = document.createElement("li")
    novaTarefa.textContent = inputTarefa.value

    listaTarefas.appendChild(novaTarefa)

    inputTarefa.value = ""
    inputTarefa.focus()
})
listaTarefas.addEventListener('click', (evento) => {
    if (evento.target.tagName === "LI") {
        evento.target.classList.toggle("concluida")
    }
})
const selectDestino = document.getElementById('select-destino')

selectDestino.addEventListener('change', function(evento) {
    const corDestino = evento.target.value

    document.body.classList.remove('energia-restaurada')

    document.body.style.backgroundColor = corDestino
    
    document.body.style.color = '#a9a9b3'    
});
const display = document.querySelector("#display-temperatura")
const valorTemp = document.querySelector("#valor-temp")
const btnAquecer = document.querySelector("#btn-aquecer")
const btnResfriar = document.querySelector("#btn-resfriar")


let temperatura = 20;
let contador
btnAquecer.addEventListener('click' , ()=> {

    btnAquecer.disabled = true

    contador = setInterval( () => {
        valorTemp.textContent = temperatura
        temperatura += 5
    
        if (temperatura >= 80){
    
            display.classList.add("perigo-critico")
           
        }
        if (temperatura >= 100) {
            clearInterval(contador)
            valorTemp.textContent =  temperatura + "Explosão Iminente°C" 
            btnResfriar.disabled = false   
        }
    },500)

})

btnResfriar.addEventListener('click',() => {

contador = setInterval(() => {
    temperatura -= 5
    valorTemp.textContent = temperatura
    if(temperatura == 20){
        clearInterval(contador)
        valorTemp.textContent = temperatura
        display.classList.remove('perigo-critico')
        btnAquecer.disabled = false
    }
    },500)

btnResfriar.disabled = true

})



    


