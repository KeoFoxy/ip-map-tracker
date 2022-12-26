import L from 'leaflet';

export function addTileLayer(map){
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2VvZm94eSIsImEiOiJjbGM1OHZvN3Uwdmc3M29wZzg4cDh4MmpiIn0.vbJKNKmzZ5eGQHcb5iJFVQ', {
        attribution: 'Coded by <a href="https://github.com/KeoFoxy/ip-map-tracker">KeoFoxy</a>.',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map);
}