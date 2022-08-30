class Usuario {

    constructor (_nombre, _apellido, _libros, _mascotas) {
        this.nombre   =   _nombre; 
        this.apellido = _apellido;
        this.libros   = _libros;
        this.mascotas = _mascotas;

        console.log("Usuer info:")
    };

                getFullName(){
                    return (`${this.nombre} ${this.apellido}`);
                };

                addMascota(){
                    this.mascotas.push();
                };

                countMascotas(){
                    return this.mascotas.length;
                };

                addBook(){
                    this.libros.push();
                };

                getBookNames(){
                    return  (`${this.libros[0]}`);
                };
};

const Usuario1 = new Usuario(
    _nombre   = "Felipe",
    _apellido = "Moreno",
    _libros   = [   
            {
         titulo : "De la tierra a la luna",
         autor  : "Julio Verne"
            }
                ],
    _mascotas = ["gato"] );


console.log(Usuario1.getFullName());
console.log(Usuario1.countMascotas());
console.log(Usuario1.getBookNames());
console.log(Usuario1);