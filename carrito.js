function Producto(id, nombre, precio, inventario) {
this.id = id;
this.nombre = nombre;
this.precio = precio;
this.inventario = inventario

this.stock = function(){
    alert( 'Tenemos ${this.inventario} productos disponibles')
}

this.comprar = function(){
    this.inventario--
    alert('Se realizo exitosamente su compra')
}

this.agregarstock = function (cantidad){
    this.inventario = cantidad
    alert('Has añadido ${cantidad} ${this.nombre} al inventario')
}

}


let productos = [
    new Producto(1, 'Pampers RN36', 15),
    new Producto(2, 'Pampers P 36', 15),
    new Producto(3, 'Pampers M 36', 15),
    new Producto(4, 'Pampers G 36', 15),
    new Producto(5, 'Pampers G 36', 15),
    
]

let carrito = []

function addToCard(){
    let productoid = Number(prompt('ID Producto'))
    let cantidad   = Number(prompt('Cantidad'))

    let producto = productos.find(product => product.id===id)
    producto.cantidad = cantidad
    producto.total = producto.precio * cantidad
    carrito.push(producto)
}

addToCard()
addToCard()
addToCard()

console.log(carrito)