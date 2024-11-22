var imageIds = ["e","444","17","14","9","n"];
var currrentImage = 0;


function flipImages(){
    $("#" + imageIds[currrentImage]).fadeOut(500);
    currrentImage = currrentImage + 1;
    if(currrentImage == imageIds.length){
        currrentImage = 0;
    }
    $("#" + imageIds[currrentImage]).fadeIn(500);
    $("#" + imageIds[currrentImage]).show();
}
setInterval(flipImages, 5000);




function toggle(){
    console.log();
if(document.getElementById("nav-btn")){
    if(document.getElementById("nav-btn").classList.toggle("show"))
    {
        document.getElementById("sidenav").style.display = "block";
    }else{
        document.getElementById("sidenav").style.display = "none";
    }
}
}




