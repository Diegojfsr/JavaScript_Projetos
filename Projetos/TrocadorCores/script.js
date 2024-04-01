
function mudarCor() { 
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256); 
    let color = "rgb(" + red + "," + green + "," + blue + ")"; 
    document.getElementById("backGroundColor").style.backgroundColor = color; 
}