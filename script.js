let url = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'ebbd9166ef5fa5b5ff0cb2a2da49cbb1'

let kelvin = 273.15

let ciudad = 'Barcelona'




document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatos(ciudad)
    }else{
        'Ciudad no encontrada'
    }
})


function fetchDatos(ciudad) {
    fetch(`${url}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(respuesta) {
    console.log(respuesta);
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = respuesta.name
    const temperatura = respuesta.main.temp
    const descripcion = respuesta.weather[0].description
    const humedad = respuesta.main.humidity
    const paisNombre = respuesta.sys.country
    const iconoClima = respuesta.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`	

    const temperaturaParrafo = document.createElement('p')
    temperaturaParrafo.innerHTML = `La temperatura es: ${Math.floor(temperatura - kelvin)}°C`

    const humedadParrafo = document.createElement('p')
    humedadParrafo.textContent = `La humedad es: ${humedad}%`

    const iconoParrafo = document.createElement('img')
    iconoParrafo.src = `https://openweathermap.org/img/wn/10d@2x.png`

    const descripcionParrafo = document.createElement('p')
    descripcionParrafo.textContent = `La descripcion metereológica es: ${descripcion}`

   

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaParrafo)
    divDatosClima.appendChild(descripcionParrafo)
    divDatosClima.appendChild(humedadParrafo)
    divDatosClima.appendChild(iconoParrafo)

}