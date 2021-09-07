window.addEventListener('load',()=>btnFuncoesUsuario());


function btnFuncoesUsuario()
{
    const mainContainer = document.querySelector('main');
    const listaFuncoes=[
        {
         texto:'Selecione as receitas para o paciente',
         link:'#',
        },
        {
            texto:'Receitas selecionadas para o paciente',
            link:'#',
        },
        {
            texto:'Receitas selecionadas para o paciente',
            link:'#',
        },
        {
            texto:'Receitas selecionadas para o paciente',
            link:'#',
        }
    ]

   listaFuncoes.forEach(({texto,link})=>{
        return mainContainer.innerHTML+=`
           <a class="btnAcao" href="${link}">
            <img src="./img/acaoIcon.png" alt="icone de acao" />
            ${texto}
           </a>
        `
    })   
}