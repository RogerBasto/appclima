const api = {
key: 'f7153d46dd824c4544469db0c0966004',
url: 'https://api.openweathermap.org/data/2.5/weather'
}

const card = document.getElementById('card');
const ciudad = document.getElementById('ciudad');
const fecha = document.getElementById('fecha');
const img = document.getElementById('img');
const temp = document.getElementById('temp');
const clima = document.getElementById('clima');



async function buscar(query){
    try{
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        const data = await response.json();
        card.style.display = 'block';
        
        ciudad.innerHTML = `${data.name}, ${data.sys.country}`;
        fecha.innerHTML = (new Date()).toLocaleDateString();
        temp.innerHTML = `${toCelsius(data.main.temp)}C`;
        clima.innerHTML = data.weather[0].description;

    }catch(err){
        console.log(err);
    }
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }

function onsubmit(event){
    event.preventDefault();
    buscar(searchbox.value);
}

const form = document.getElementById('busqueda');
const searchbox = document.getElementById('searchbox');
form.addEventListener('submit',onsubmit,true);