function funcionesTabla() {

  let boton = document.getElementById("btnRegistrar");


  boton.addEventListener("click", async function () {

    //Obtenemos el valor a buscar dentro de la data segun la seleccion del usuario

    let nombre = document.getElementById(`animal`).value;
    let comentarios = document.getElementById(`comentarios`).value
    let edad = document.getElementById('edad').value;


    console.log(nombre);
    let baseUrl = "."
    let recurso = "/animales.json"

    // obtenemos data de los animales

    let response = await fetch(baseUrl + recurso);
    let data = await response.json()

    //Variable para identificar el animal seleccionado y sus elementos
    const animalSeleccionado = data.animales.find(animal => animal.name == nombre)


    //Contenedor donde van las cards
    let caja = document.getElementById("Animales")

    let datosModal = document.querySelector(".modal-body")
    //Genera un audio por animal seleccionado
    const audioAnimales = new Audio(`./assets/sounds/${animalSeleccionado.sonido}`);

    //Se genera una variable aleatoria para poder reproducir el sonido de animales
    //que se seleccionen repetidos , de lo contrario solo reproducirá el del primero

    const especifico = Math.random()

    //Funcion para crear las cartas

    function crearCarta() {

      let card = `<div class="card px-1 pb-1">
        <div>
          <img 
            src="./assets/imgs/${animalSeleccionado.imagen}" 
            height="200px" 
            data-toggle="modal" data-target="#exampleModal"
            width="150px"
          >
          <button class="btn btn-secondary w-100" class id="play-${animalSeleccionado.name}-${especifico}">
            <img 
              src="./assets/imgs/audio.svg" 
              height="30px"
            >
          </button>
        </div>
      </div>`

      //Así se puede ir creando nuevas cartas 

      let contenerdores = document.createElement("col");
      contenerdores.innerHTML = card;
      caja.append(contenerdores);


      //tomo el valor especifico creado , y genero una variable para almacenarlo
      let playEspecifico = document.getElementById(`play-${animalSeleccionado.name}-${especifico}`)

      //Funcion para reproducir el sonido al clickear.

      playEspecifico.addEventListener("click", () => {
        audioAnimales.play();

      })


    }

    //Modal , podría ajustarse esteticamente y falta ajustar un poco su funcionalidad ya que muestra solo el 
    //que figura en la tabla actualmente , pero me estaba atrasando mucho con este trabajo.
    function modificarModal() {

      let modalData = ` <img 
            src="./assets/imgs/${animalSeleccionado.imagen}" 
            height="200px" 
            data-toggle="modal" data-target="#exampleModal"
            width="150px"
          >
<p>${animalSeleccionado.name}</p >

    <p>${edad}</p>
    <p>${comentarios}</p>`


      datosModal.innerHTML = modalData;

    }
    modificarModal();
    crearCarta();
  })
}
export { funcionesTabla }








