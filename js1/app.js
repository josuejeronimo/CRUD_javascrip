

//Dom de eventos
document
.getElementById("formulario-producto")
.addEventListener("submit", function(elemento){
    
    elemento.preventDefault(); //evalua el comportamiento del elemento


    //obtener valores de formulario
    const nombre= document.getElementById ("name"). value, 
    precio = document.getElementById ("precio"). value, 
    year = document.getElementById ("year"). value;

    //crear nuevo producto
    const producto =  new producto(nombre, precio, year);

    //crear nuevo usuario
    const usuario = new usuario();

    //Boton de validacion
    if(nombre=== ""|| precio===""|| year ===""){
        usuario.showMessage("Porfavor insertar nombre de ususario");
    }

    //Guardar producto
    usuario.AddProducto(producto);
    usuario.showMessage("Producto agregado correctamente");
    usuario.resetForm();
    
});

document.getElementById("Lista-producto").addEventListener("click",(elemento) =>{
    const usuario = new Usuario();
    usuario.deleteProduct(elemento,target);
    elemento.preventDefaul();
});

//elemento Clase

export class Producto{
    constructor(nombre, precio, year){
        this.nombre = nombre;
        this.precio = precio;
        this.year = year;
    }
}

