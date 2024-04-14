function validar() {

    //validación de campos al clickear
    let boton = document.getElementById("btnRegistrar");

    boton.addEventListener("click", (event) => {
        event.preventDefault();

        //Toma los valores entregados
        let animalSeleccionado = document.getElementById(`animal`).value;
        let edadSeleccionada = document.getElementById("edad").value;
        let comentariosSeleccionados = document.getElementById(`comentarios`).value;


        // Si los valores no se ingresan completamente , manda un alert y reinicia la pagina para no continuar
        if (animalSeleccionado != "Seleccione un animal" && edadSeleccionada != "Seleccione un rango de años" &&
            comentariosSeleccionados != "") {

            //Si esta todo bien , manda un aviso por consola.
            console.log("Datos Correctos")
        } else {
            alert("Llena todos los campos por favor")
            window.location.reload()

        }
    }
    )
}

export { validar } 