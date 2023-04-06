/*
----------------------------------------------------------------
Funções
----------------------------------------------------------------
*/

//Função para posicionar elemento na tela

// recebe o parametro el que informa 
//qual elemento  se desloca 

const posicElemento  = (el)=>{
      //sorteia um numero para os posicionamentos
let posX = Math.floor(Math.random ()*960 + 40)
let posY = Math.floor(Math.random () *alturaQuadro/2 + 40)




el.style.position = 'absolute'

el.style.left = -posX +'px'

el.style.top = posY + 'px'


}


//função para deslocar os elementos na tela
//parametros elemento , velocidade  e incremento
const moveElemento =(el, veloc,inc)=>{
        //setInterval - repete função constantemente

const anima = setInterval( ()=>{
      veloc = veloc + inc
      el.style.left = veloc + 'px'

      //verifica se saiu do quadro e retorna

      if(veloc > larguraQuadro){
        veloc = -Math.random( ) *400+80

        inc = Math.random()*40+10

        posicElemento(el)

      }

} ,40) 

          //para interroper o anima
         //clearInterval (anima)
}


//função para clicar no elemento  - matar o elemento 
const clickBug =(el)=>{
    alert ('fui de f')

}

/*

----------------------------------------------------------------
variaveis  Eventos,Automação 
----------------------------------------------------------------
*/
// variavel com a lista  de invasores (baseado na classe "invasor")

let invasores = document.querySelectorAll('.invasor')



// variavel com a lista  de bonzinho (baseado na classe "bonzinho")

let bonzinhos = document.querySelectorAll('.bonzinho')


//contar pontuação

let score = 0


//tempo para a rodada ,modifique a duração do jogo aqui

let tempoRestante = 30

//largura da tela 
//importante para detectar se o inseto saiu de cena 
let larguraQuadro = document.getElementById('quadro').offsetWidth
//altura do quadro

let alturaQuadro = document.getElementById('quadro').offsetHeight


//laço de repetição
//comportamento de todos invasores
for (const inv of invasores) {
    let velocInicio = Math.floor(Math.random()*20 + 5)
    let incrementoinicio  = Math.floor(Math.random()*10+ 5)
    posicElemento(inv)
    moveElemento(inv,velocInicio,incrementoinicio)
    inv.addEventListener('click',()=>{
        clickBug (inv)
    })

}



//laço de repetição
//comportamento de todos os bonzinhos
for (const bom of bonzinhos) {
    let velocInicio = Math.floor(Math.random()*20 + 5)
    let incrementoinicio  = Math.floor(Math.random()*10+ 5)
    
    posicElemento(bom)
    moveElemento(bom,velocInicio,incrementoinicio)

    bom.addEventListener('click',()=>{
        clickBug (bom)
    })
}





