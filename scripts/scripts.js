alert("Te damos la bienvenida, nos alegra que estes aca")
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

if ((nombre == "") && (apellido == "")) {
    alert("Necesitas rellenar el campo de nombre y apellido para continuar la operacion")
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
}

alert("Te damos la bienvenida nuevamente " + " " + nombre + " " + apellido + " " + "aca vas a encontrar las mejores velas para tu hogar")

let saludo = prompt("Selecciona la vela que deseas.\n " + "\nPor Ejemplo '1' para verbenaylimon " + "\n\n1-verbenaylimon" + "\n2-jazminylavanda" + "\n3-vainillaycoco" + "\n4-mentaytomillo")
let verbenaylimon = 1;
let jazminylavanda = 2;
let vainillaycoco = 3;
let mentaytomillo = 4;

while ((parseInt(saludo) !== verbenaylimon) && (parseInt(saludo) !== jazminylavanda) && (parseInt(saludo) !== vainillaycoco) && (parseInt(saludo) !== mentaytomillo)) {
    saludo = prompt("Selecciona la vela que deseas.\n " + "\nPor Ejemplo '1' para verbenaylimon " + "\n\n1-verbenaylimon" + "\n2-jazminylavanda" + "\n3-vainillaycoco" + "\n4-mentaytomillo")
}

let montoverbenaylimon =750;{

alert("Las velas tienen un costo de $750 pesos");


    let cantidadverbenaylimon = prompt("¿Cuantas velas llevas?");

    while ((parseInt(cantidadverbenaylimon) <= 0)) {
        alert("Tenes que elegir al menos 1 vela para seguir la compra. Gracias");
        cantidadverbenaylimon = prompt("¿Cuantas velas llevas?");
    }
    let suma = parseInt(cantidadverbenaylimon) * 750;

    alert(" El monto a pagar es " + suma);

    let pago = prompt("¿Con cuanto vas a abonar?");



    if (pago < suma) {
        alert("Tu saldo es insuficiente para la compra")
    }

    if (pago >= suma) {

        alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. ¡Que lo disfrutes! Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
    }

}

let montojazminylavanda =650;{

    alert("Las velas tienen un costo de $650 pesos");
    
    
        let cantidadjazminylavanda = prompt("¿Cuantas velas llevas?");
    
        while ((parseInt(cantidadjazminylavanda) <= 0)) {
            alert("tenes que elegir al menos 1 vela para seguir la compra. Gracias");
            cantidadjazminylavanda = prompt("¿Cuantas velas llevas?");
        }
        let suma = parseInt(cantidadjazminylavanda) * 650;
    
        alert(" El monto a pagar es " + suma);
    
        let pago = prompt("¿Con cuanto vas a abonar?");
    
    
    
        if (pago < suma) {
            alert("Tu saldo es insuficiente para continuar")
        }
    
        if (pago >= suma) {
    
            alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. ¡Que lo disfrutes! Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
        }
    
    }
    
    let montovainillaycoco =700;{

        alert("Las velas tienen un costo de $700 pesos");
        
        
            let cantidadvainillaycoco = prompt("¿Cuantas velas llevas?");
        
            while ((parseInt(cantidadvainillaycoco) <= 0)) {
                alert("tenes que elegir al menos 1 vela para seguir la compra. Gracias");
                cantidadvainillaycoco = prompt("¿Cuantas velas llevas?");
            }
            let suma = parseInt(cantidadvainillaycoco) * 700;
        
            alert(" El monto a pagar es " + suma);
        
            let pago = prompt("¿Con cuanto vas a abonar?");
        
        
        
            if (pago < suma) {
                alert("Tu saldo es insuficiente para la compra")
            }
        
            if (pago >= suma) {
        
                alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. ¡Que lo disfrutes! Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
            }
        
        }
        
        let montomentaytomillo =820;{

            alert("Las velas tienen un costo de $820 pesos");
            
            
                let cantidadmentaytomillo = prompt("¿Cuantas velas llevas?");
            
                while ((parseInt(cantidadmentaytomillo) <= 0)) {
                    alert("tenes que elegir al menos 1 vela para seguir la compra. Gracias");
                    cantidadmentaytomillo = prompt("¿Cuantas velas llevas?");
                }
                let suma = parseInt(cantidadmentaytomillon) * 820;
            
                alert(" El monto a pagar es " + suma);
            
                let pago = prompt("¿Con cuanto vas a abonar?");
            
            
            
                if (pago < suma) {
                    alert("Tu saldo es insuficiente para la compra")
                }
            
                if (pago >= suma) {
            
                    alert("Muchas gracias " + " " + nombre + " Tu compra se finalizo con exito. ¡Que lo disfrutes! Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
                }
            
            }
            
                        