var botao = document.querySelector('.open-nav');
var line = document.querySelectorAll('.line');
var menu = document.querySelector('.menu');

//Ação do botão hambuguer
// Adicionar uma class no objeto html
botao.addEventListener('click', function () {
    menu.classList.toggle('active')
    // for para adicionar classe a todos os itens do botão
    for (let i = 0; i < line.length; i++) {
        line[i].classList.toggle('bg');
    }
});

//ícones
var js = document.querySelector('.js');
var njs = document.querySelector('.njs');
var ang = document.querySelector('.ang');
var html = document.querySelector('.html');
var css = document.querySelector('.css');
//menus botoes
var home = document.querySelector('.home');
var form = document.querySelector('.form');
var proj = document.querySelector('.proj');
var cont = document.querySelector('.cont');
var toolbar = document.querySelector('.marca h1');

// Ações dos botões do menu modo mobile
home.addEventListener('click',function(){
    toolbar.textContent = "Home";
});

form.addEventListener('click',function(){
    toolbar.textContent = "Formação";
});

proj.addEventListener('click',function(){
    toolbar.textContent = "Projetos";
});

cont.addEventListener('click',function(){
    toolbar.textContent = "Contatos";
});


var text1 = document.querySelector('.text2 p');
var texto = text1.textContent;

// Ações dos ícones modo mobile
js.addEventListener('mouseover',function(){      
    text1.textContent = "Essa é a lingugem Java Script.";
});
js.addEventListener('mouseout',function(){    
    text1.textContent = texto;
});
njs.addEventListener('mouseover',function(){
    text1.textContent = "Essa é a lingugem NodeJS.";
});
njs.addEventListener('mouseout',function(){    
    text1.textContent = texto;
});
css.addEventListener('mouseover',function(){
    text1.textContent = "Essa é uma linguagem de folha de estilos.";
});
css.addEventListener('mouseout',function(){    
    text1.textContent = texto;
});
html.addEventListener('mouseover',function(){
    text1.textContent = "Essa é a lingugem de marcação de texto.";
});
html.addEventListener('mouseout',function(){    
    text1.textContent = texto;
});
ang.addEventListener('mouseover',function(){
    text1.textContent = "Este é um framework front end.";
});
ang.addEventListener('mouseout',function(){    
    text1.textContent = texto;
});
