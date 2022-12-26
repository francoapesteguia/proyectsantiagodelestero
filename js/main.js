let lugares = "Santiago";

function reservas(){
    let ingresar = false;

    for (let i = 2; i >= 0; i--){
        let destino = prompt("Ingrese su destino: (Santiago, Termas, Completo)")
        if(destino == lugares){
            alert("Su destino elegido es " + destino)
            ingresar = true
            break
        }
        if(destino == "Completo"){
            alert("Su destino elegido es " + destino)
            ingresar = true
            break
        }
        if(destino == "Termas"){
            alert("Su destino elegido es " + destino)
            ingresar = true
            break}
        else{
            alert("No tenemos paquetes hacia ese destino. Destinos disponibles (Santiago, Termas, Completo) Oportunidades: " + i)
        }
    }
    return ingresar;
}

let precioPorPersona5
let precioPorPersona4
let precioPorPersona3
let precioPorPersona2
let precioPorPersona
let correcto = reservas()
if(correcto){
    let hotel= prompt('Estrellas del hotel a reservar: \n1 *. \n2 - **. \n3 - ***. \n4 - ****. \n5 - *****. \n6 - X para finalizar.');

    while (hotel != "X"){
    switch (hotel) {
        case "1":
            alert("Hotel seleccionado: El precio es 1650 pesos por persona")
            let cantidadPersonas = prompt("Ingrese la cantidad de personas")
            if (cantidadPersonas >= 4){
                precioPorPersona = 1650 * 0.90
            }
            let precioTotal = cantidadPersonas * precioPorPersona
            alert("El total a pagar es: " + precioTotal)
        break;
        case "2":
            alert("Hotel seleccionado: El precio es 2000 pesos por persona")
            let cantidadPersonas2 = prompt("Ingrese la cantidad de personas")
            if (cantidadPersonas2 >= 4){
                precioPorPersona2 = 2000 * 0.90
            }
            let precioTotal2 = cantidadPersonas2 * precioPorPersona2
            alert("El total a pagar es: " + precioTotal2)
        break;
            
        case "3":
            alert("Hotel seleccionado: El precio es 4050 pesos por persona")
            let cantidadPersonas3 = prompt("Ingrese la cantidad de personas")
            if (cantidadPersonas3 >= 4){
                precioPorPersona3 = 4050 * 0.90
            }
            let precioTotal3 = cantidadPersonas3 * precioPorPersona3
            alert("El total a pagar es: " + precioTotal3)
        break;
        
        case "4":
            alert("Hotel seleccionado: El precio es 5200 pesos por persona")
            let cantidadPersonas4 = prompt("Ingrese la cantidad de personas")
            if (cantidadPersonas4 >= 4){
                precioPorPersona4 = 5200 * 0.90
            }
            let precioTotal4 = cantidadPersonas4 * precioPorPersona4
            alert("El total a pagar es: " + precioTotal4)
        break;
            
        case "5":
            alert("Hotel seleccionado: El precio es 6500 pesos por persona")
            let cantidadPersonas5 = prompt("Ingrese la cantidad de personas")
            if (cantidadPersonas5 >= 4){
                precioPorPersona5 = 6500 * 0.90
            }
            let precioTotal5 = cantidadPersonas5 * precioPorPersona5
            alert("El total a pagar es: " + precioTotal5)
        break;
            
    
        default:
            alert("Opción no encontrada")
        break;
    }

    hotel= prompt('Estrellas del hotel a reservar: \n1 *. \n2 - **. \n3 - ***. \n4 - ****. \n5 - *****. \n6 - X para finalizar.');
    }

}
