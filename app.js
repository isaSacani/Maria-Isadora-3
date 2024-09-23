function criaCartao(categoria,pergunta,resposta){
    letcontainer=document.getElementById('container')
letcartao= document.createElement('article')
cartao.className='cartao'
cartao . innerHTML=
<div class="cartao__conteudo"
<h3>$(categoria)</h3>
    <div class="cartao__conteudo__pergunta"
    <p>$(pergunta)</p>
</div>
<div class="cartao__conteudo__resposta">
    <p>${pergunta}</p>
    </div>
    </div>
let respostaEstaVisivel=false
functionViraCartao(){
    respostaEstaVisivel=!respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.eddEventListener('click', viraCartao)
CSSContainerRule.appendChild(cartao)
}
