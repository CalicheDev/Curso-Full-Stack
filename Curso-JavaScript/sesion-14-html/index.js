const a = 4

const b = 8

console.log(a*b)

const p = document.getElementById("parrafo")

console.log(p)


/* $(document).ready(function(){
    $("h2").hide()
}) */

$(() =>{
    $(".hide-btn").click(()=>{
        $("h1").fadeOut()
    })
    $(".show-btn").click(()=>{
        $("h1").fadeIn()
    })
})
