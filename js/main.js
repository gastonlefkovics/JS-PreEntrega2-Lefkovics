
let cliente = prompt("Bienvenido. Es usted cliente? Si / No");/* login usuario*/
if (cliente.toLowerCase() == "si"){
    usuario = prompt("Ingrese su nombre de usuario");
}else {
    alert("Debe crear un usuario.")
}
/* declaro objetos*/
const servicios = [
    { nombre: "aceite", precio: 5000 },
    { nombre: "filtro", precio: 3000 },
    { nombre: "cubierta", precio: 10000 },
];

let shop = []
let seleccion = prompt (`Hola ${usuario} deseas reservar algun turno de service? si o no`)

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("Hola deseas reservar algun turno de service? si o no")
}

if(seleccion == "si"){
    alert("Elegí alguno de nuestros services")
    let TodosLosServicios = servicios.map(
        (servicio) => servicio.nombre + " " + "$" + servicio.precio
        );
        alert(TodosLosServicios.join(" - "))
}else if (seleccion.toLowerCase() == "no"){
    alert("Gracias por venir, volvé pronto! ;)")
}

while(seleccion != "no"){
    let servicio = prompt("Agregá un service para reservar tu turno")
    let precio = 0
    if(servicio == "aceite" || servicio == "filtro" || servicio == "cubierta"){
        switch(servicio){
            case "aceite":
                precio = 5000;
                break;
            case "filtro":
                precio = 3000;
                break;
            case "cubierta":
                precio = 10000;
                break;
        default:
            alert(`Ingrese un valor correcto`);
            break;
        }
    let unidades = parseInt(prompt("Cuantas unidades querés reservar?"))
    shop.push({servicio, unidades, precio})
    }
    else {
        alert("No realizamos ese tipo de service")
    }

    seleccion = prompt("Queres sumar otro producto para tu service?")
    while (seleccion == "no"){
        alert(`Gracias por reservar ${usuario}`)
        shop.forEach((shopFinal) => {
            console.log(`Servicio: ${shopFinal.servicio}, unidades: ${shopFinal.unidades}, total a pagar por servicios ${shopFinal.unidades * shopFinal.precio}`)
        })
    break;
    }
}

/* anticipo */
let anticipo = prompt(`${usuario} Debes abonar un anticipo de 3000 pesos`);
if (anticipo >= 3000 ){
    alert(`Gracias ${usuario}! llegará un correo a tu casilla con la información de tu turno asignado.`)
}else {
    alert("Debes abonar el anticipo necesario para realizar una reserva.")
}

const total = shop.reduce((acc, el) => acc + el.precio * el.unidades, 0 )
console.log(`El total a pagar por su turno es de: ${total}. Su reserva es de $${anticipo}`)
