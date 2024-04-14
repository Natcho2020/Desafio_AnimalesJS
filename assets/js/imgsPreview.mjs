
// Autoejecutable solo por si acaso
const imagenesPreview = (() => {

    document.querySelector("#animal").addEventListener("change", async function () {
        let baseUrl = "."
        let recurso = "/animales.json"
        // obtenemos la data 
        let response = await fetch(baseUrl + recurso);
        let data = await response.json()

        const seleccion = this.value;

        //Busca la imagen a mostrar segun la seleccion del usuario con find.
        const animalSeleccionado = data.animales.find(animal => animal.name == seleccion)

        document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/${animalSeleccionado.imagen})`


    })

}
)()
export { imagenesPreview } 
