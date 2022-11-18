'use strict'

const code_block = document.querySelector('#code_block')
const btn_visualizar_highlight = document.querySelector('#btn_visualizar_highlight')
const select_linguagem = document.querySelector('#select_linguagem')
const colorpicker = document.querySelector('#colorpicker_cor_projeto')
const editor_container = document.querySelector('.editor__container')


colorpicker.addEventListener('input', (e) => {
    const cor = e.target.value
    alterarCorEditor(cor)
})

btn_visualizar_highlight.addEventListener('click', (e)=>{

    const linguagem = select_linguagem.value
    fazerSintaxHighlight(linguagem)
})

function alterarCorEditor(cor){

    editor_container.style.backgroundColor = cor
}

function fazerSintaxHighlight(linguagem){

    const codigo = editor_container.innerText
    editor_container.innerHTML = `<code id="code_block" class="code-box code-box__content language-${linguagem}" contenteditable="true" spellcheck="false"></code>`

    editor_container.querySelector('code').textContent = codigo
    console.log(codigo)

    hljs.highlightElement(editor_container.querySelector('code'))
}