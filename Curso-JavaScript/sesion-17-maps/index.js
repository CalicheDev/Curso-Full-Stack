let marker, map;
  function initMap(){
    // console.log("Inicializando mapa")
    const posicion = {
    lat: -25.363,
    lng: 131.044
    }
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion

    })

    marker = new google.maps.Marker({
        position: posicion,
        map,
        tittle: "Posicion Inicial"
    })
    
    geoPosiciona()
  }

function geoPosiciona(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPos = geoLoc.watchPosition(centraMapa, onError,options)
    }else {
        alert("Navegador no compatible con geolocation")
    }
}


function centraMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){
    console.error(error)
}
