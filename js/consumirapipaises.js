var respuestaPaisesAPI

function poblarDatosPaises() {

    var url = 'https://restcountries.com/v3.1/independent?status=true'
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {

            // crearListPaises(paises)
            adicionarDatosTablaPaises(paises)
            agregarElementosSelect(paises)

        })


    function adicionarDatosTablaPaises(paises) {
        var tabla = document.getElementById("tablaPaises")
        for (const pais of paises) {
            var fila = tabla.insertRow(-1)
            var columnaNombre = fila.insertCell(0)
            var columnaCapital = fila.insertCell(1)
            var columnaMoneda = fila.insertCell(2)
            var columnaBanderas = fila.insertCell(3)
            var columnaPoblacion = fila.insertCell(4)
            var columnaRegion = fila.insertCell(5)

            columnaNombre.innerHTML = pais.name.official
            columnaCapital.innerHTML = pais.capital[0]
            columnaMoneda.innerHTML = pais.currencies
            columnaBanderas.innerHTML = pais.flag
            columnaPoblacion.innerHTML = pais.population
            columnaRegion.innerHTML = pais.region


        }
    }

    function crearListPaises(paises) {
        var ul = crearNodo('ul')


        for (const pais of paises) {

            var li = crearNodoTexto('li', pais.name.common)
            adicionarNodoContenedor(ul, li)
        }

        adicionarNodoBody(ul)
    }
}

function agregarElementosSelect(paises) {
    var selectPaises = document.getElementById("selectPaises")
    for (const pais of paises) {
        var option = crearNodoTexto('option', pais.name.official)
        adicionarNodoContenedor(selectPaises, option)
    }
}
function mostrarDatosPaisSelecccionados(paisBuscar) {
   console.log(paisBuscar)
       var tabla = document.getElementById("tablaPaises")

    
   tabla.remove()
    for (const pais of respuestaPaisesAPI) {
     
        if (pais == pais.name.common)
            var fila = tabla.insertRow(-1)
        var columnaNombre = fila.insertCell(0)
        var columnaCapital = fila.insertCell(1)
        var columnaMoneda = fila.insertCell(2)
        var columnaBanderas = fila.insertCell(3)
        var columnaPoblacion = fila.insertCell(4)
        var columnaRegion = fila.insertCell(5)

        columnaNombre.innerHTML = pais.name.official
        columnaCapital.innerHTML = pais.capital[0]
        columnaMoneda.innerHTML = pais.currencies
        columnaBanderas.innerHTML = pais.flag
        columnaPoblacion.innerHTML = pais.population
        columnaRegion.innerHTML = pais.region
    }
}