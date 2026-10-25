
document.addEventListener("DOMContentLoaded", function(event) {
    // JavaScript code goes here
    //alert("Hello!");
    
    //Declaracion de variables
    var thumbnailElement = document.getElementById("smart_thumbnail");//Captura la imagen usando su ID

    thumbnailElement.addEventListener("click", function() {
            if (thumbnailElement.className === "small") {
                thumbnailElement.className = "";
            } else {                                         //detector de eventos de clic a la imagen
                thumbnailElement.className = "small";
            }
    });

});


