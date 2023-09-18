const imgs = document.querySelectorAll(".foto_mural")
imgs.forEach((colecao) =>{
    colecao.addEventListener("click",()=>{
        colecao.classList.toggle("zoom")
    })
})