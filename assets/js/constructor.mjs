function constructor() {

    let boton = document.getElementById("btnRegistrar");

    //Lo hice con el click del boton ya que tenia id y el form no lo manejo tanto
    // y no queria alterar al html 

    boton.addEventListener("click", async function () {

        //Obtener valor para determinar selección de usuario
        let nombre = document.getElementById(`animal`).value;


        let baseUrl = "."
        let recurso = "/animales.json"

        let response = await fetch(baseUrl + recurso);
        let data = await response.json()
        const animalSeleccionado = data.animales.find(animal => animal.name == nombre)

        //obtener datos de los valores que vamos a usar//

        let edad = document.getElementById('edad').value;
        let comentarios = document.getElementById(`comentarios`).value;

        let img = animalSeleccionado.imagen

        let sonido = animalSeleccionado.sonido


        // Constructor según rúbrica
        class Animal {
            #nombre
            #edad
            #img
            #comentarios
            #sonido
            constructor(nombre, edad, img, comentarios, sonido) {
                this.#nombre = nombre
                this.#edad = edad
                this.#img = img
                this.#comentarios = comentarios
                this.#sonido = sonido
            }

            get nombre() {
                return this.#nombre
            }

            get edad() {
                return this.#edad
            }

            get img() {
                return this.#img
            }

            get comentarios() {
                return this.#comentarios
            }

            get sonido() {
                return this.#sonido
            }
        }
        class Aguila extends Animal {
            constructor(nombre, edad, img, comentarios, sonido) {
                super(nombre, edad, img, comentarios, sonido)
            }

            chilla() {
                return 'chiiiiiiAAA!'
            }
        }
        class Leon extends Animal {
            constructor(nombre, edad, img, comentarios, sonido) {
                super(nombre, edad, img, comentarios, sonido)
            }

            rugir() {
                return 'rugiendo'
            }
        }
        class Lobo extends Animal {
            constructor(nombre, edad, img, comentarios, sonido) {
                super(nombre, edad, img, comentarios, sonido)
            }

            aullar() {
                return 'auuuuuu!!!!'
            }
        }
        class Oso extends Animal {
            constructor(nombre, edad, img, comentarios, sonido) {
                super(nombre, edad, img, comentarios, sonido)
            }

            grunir() {
                return 'gggrrRRRRrrr'
            }
        }
        class Serpiente extends Animal {
            constructor(nombre, edad, img, comentarios, sonido) {
                super(nombre, edad, img, comentarios, sonido)
            }

            sissear() {
                return 'SSSSSSsssss'
            }
        }

        //Instancia de clase según el formulario , reemplazando valores por los ingresados por el usuario
        let creacion = new Animal(nombre, edad, img, comentarios, sonido)

        //Verificación sobre la creación de instancia
        console.log(creacion)


    })


}
export { constructor }