import { validateIp } from "./helpers";

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keyDown', handleKey)

function getData(){
    if(validateIp(ipInput.value)){
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_5rjFguN0ChRp64Exf6qOO6VrvEw4E&ipAddress=${ipInput.value}`)
        .then(response => response.json())
        .then(setInfo)
    }
}

function handleKey(e){
    if(e.key === 'Enter') {
        getData();
    }
}

//202.11.23.11
function setInfo(mapData){
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = mapData.location.country + ' ' + mapData.location.region;
    timezoneInfo.innerText = mapData.location.timezone;
    ispInfo.innerText = mapData.isp;
}