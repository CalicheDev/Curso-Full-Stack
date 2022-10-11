const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", ()=>{
        console.log("Inicio de arrastre")
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        // console.log(parrafo.innerText)
    })
    parrafo.addEventListener("dragend", ()=>{
        console.log("Has terminado de arrastrar el párrafo: " + parrafo.innerText)
        parrafo.classList.remove("dragging")
        
    })
})

secciones.forEach(seccion=>{
    seccion.addEventListener("dragover",event=>{
        event.preventDefault()
        console.log("Drag Over")
    })
    seccion.addEventListener("drop",()=>{
        console.log("Drop")
    })
})





































