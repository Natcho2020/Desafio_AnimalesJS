
import { validar } from "./validar.mjs";
import { imagenesPreview } from "./imgsPreview.mjs";
import { funcionesTabla } from "./funcionesTabla.mjs";
import { constructor } from "./constructor.mjs";


//Funcion autoejecutable , lo pense así por que creo 
// se ordena mejor separando las partes en base a sus funciones y asi 
// por ejemplo en caso de que falle el modal , solo se ataca dicha funcion y no afecta 
// al resto de la página que seguirá ejecutandose . 

const autoEjecutable = (() => {

    validar();
    imagenesPreview;
    constructor();
    funcionesTabla();
})();

