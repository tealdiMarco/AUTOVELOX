window.onload = init;

function init(){
    
    var SPEED = sessionStorage.getItem("SPEED");
    //console.log(SPEED);
    var photo = sessionStorage.getItem("photo");
    //console.log(photo);
    document.getElementById("importo").innerText = (parseInt(SPEED) * 30) + 50.
    document.getElementById("foto").style.backgroundImage = photo;
    document.getElementById("vell").innerText = SPEED;
    //console.log(document.getElementById("foto").style.backgroundImage);


}