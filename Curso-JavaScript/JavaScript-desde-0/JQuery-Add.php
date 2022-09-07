<!-- JavaScript desde 0. JQuery V. Eliminando y reemplazando contenido. Vídeo 33 -->
<!-- Funciones .remove() // .replaceWith() -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #banner{
            background-color: #F00;
            width: 450px;
            height: 300px;
            position: absolute;
            left: 400px;
            top: 50px;
            font-size: 36px;
            text-align: center;
        }
        img{
            float: left;
            margin: 15px;
            width: 350px;
            height: 200px;
        }
        #sustitucion{
            float: left;
            margin: 15px;
            width: 350px;
            height: 200px;
            font-size: 36px;
        }
    </style>
    <script src="Jquery/jQuery-v3-6-1.js"></script>

    <script>
        $(document).ready(function(){
            var z = document.getElementById("cerrar");

            z.addEventListener("click", cerrar_banner, false);
            // console.log(z);
            // document.getElementById("imagen1").addEventListener("click",carrito,false);

            var imagenes = document.querySelectorAll("#carrete img");

            for(var i=0;i<imagenes.length;i++){
                imagenes[i].addEventListener("click",carrito,false);
            }

        });

        function cerrar_banner(){
            $("#banner").remove();
        }
        /* function carrito(){
            $("#imagen1").replaceWith("<div id='sustitucion'> Agregado al carrito</div>");
        } */
        function carrito(num){
            if(num.target==imagen1){
                $("#imagen1").replaceWith("<div id='imagen1'> Agregado al carrito</div>");
            }
            if(num.target==imagen2){
                $("#imagen2").replaceWith("<div id='imagen2'> Agregado al carrito</div>");
            }
            if(num.target==imagen3){
                $("#imagen3").replaceWith("<div id='imagen3'> Agregado al carrito</div>");
            }
            if(num.target==imagen4){
                $("#imagen4").replaceWith("<div id='imagen4'> Agregado al carrito</div>");
            }
        }

    </script>

    <title>Document</title>
</head>
<body>
    <div id="banner">
        Banner de prueba
        <p id="cerrar">Cerrar</p>
    </div>
    <div id="carrete">
        <img src="images/Fondo_linkedin.jpg" id="imagen1" alt="">
        <img src="images/Menu-modulo inventario.jpeg" id="imagen2" alt="">
        <img src="images/profile.jpg" id="imagen3" alt="">
        <img src="images/programacion-web.png" id="imagen4" alt="">
    </div>
</body>
</html>
