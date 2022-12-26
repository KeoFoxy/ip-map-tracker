import { addTileLayer, validateIp } from "./helpers";
import L from 'leaflet';
import icon from '../images/icon-location.svg'
import 'leaflet/dist/leaflet.css';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keyDown', handleKey);

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
    //iconAnchor: [22, 94]
})

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [35.652, 139.839],
    zoom: 12,
    zoomControl: false
});

addTileLayer(map);

L.marker([35.6917, 139.7697], { icon: markerIcon}).addTo(map);

function getData(){
    if(validateIp(ipInput.value)){
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_5rjFguN0ChRp64Exf6qOO6VrvEw4E&ipAddress=${ipInput.value}`)
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
    console.log(mapData);
    const {lat, lng, country, region, timezone} = mapData.location;

    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = country + ' ' + region;
    timezoneInfo.innerText = timezone;
    ispInfo.innerText = mapData.isp;

    map.setView([lat, lng]);
    L.marker([lat, lng],{ icon: markerIcon}).addTo(map);
}