var imagenes = ["d1.jpg","d3.jpg","d5.jpg","d6.jpg","d7.jpg","dd2.jpg","s2.jpg","d13.jpg","a3.jpg","a4.jpg"];
var cont = 0;

function imgAnt () {
    if ( cont > 0){
        cont-- ;
    }    
    else{
        cont = imagenes.length-1;
    }
    fotoactual();
}
function imgSig () {
    if ( cont < imagenes.length-1){
        cont++ ;
    }    
    else{
        cont = 0;
    }
    fotoactual();
}
function fotoactual (){
    var contimg = document.getElementById ("foto-carrusel");
    contimg.src = imagenes [cont];
}
