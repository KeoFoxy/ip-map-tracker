const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

btn.addEventListener('click', getData);
ipInput.addEventListener('keyDown', handleKey)

function getData(){
    //check data
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_5rjFguN0ChRp64Exf6qOO6VrvEw4E&ipAddress=${ipInput.value}`)
        .then(response => response.json())
        .then(console.log)
}

function handleKey(e){
    if(e.key === 'Enter') {
        getData();
    }
}