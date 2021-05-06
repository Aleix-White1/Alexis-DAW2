
function leerFichero(){
    var arrayData = new Array();
    var txt = new XMLHttpRequest();
    var archivo = "historial.txt";
    txt.open("GET", archivo, false);
    txt.send();
    var contenido = txt.responseText;
    for(var i = 0; i < contenido.length; i++){
        arrayData.push(contenido[i]);
        alert("arrayData");
        //document.getElementById("p").innerHTML= "Hola";

    }
}


