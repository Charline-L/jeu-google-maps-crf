// appelée une fois la carte chargée
function startGame() {
    new GMap( $('#map') )
}

function reloadGame(){
    console.log('in reload game')
    if (sessionStorage.getItem('count') !== null) sessionStorage.setItem('count', 0);
}