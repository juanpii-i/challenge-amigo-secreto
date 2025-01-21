let numeroDeAmigos = 0;
let numeroMaximoAmigos = 10;
let numeroMinimoAmigos = 4;
let listaDeAmigosSecretos = [];
let listaParejasAmigosSecretos = [];

function agregarAmigos() {
    let amigoAgregado = (document.getElementById('amigo').value);

    if (amigoAgregado.trim() === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        if (validarNombres(amigoAgregado)) {
            listaDeAmigosSecretos.push(amigoAgregado);
            numeroDeAmigos++;
            limpiarCajaDeTexto();
            console.log(numeroDeAmigos);
            console.log(amigoAgregado);
            console.log(listaDeAmigosSecretos);
        }
    }
}

function validarNombres(amigoAgregado) {
    if (listaDeAmigosSecretos.includes(amigoAgregado)) {
        alert('El nombre introducido ya existe, ingrese un nuevo');
        return false; // Indica que el nombre no es válido
    }
    return true; // Indica que el nombre es válido
}

function limpiarCajaDeTexto() {
    document.getElementById('amigo').value = "";
}

function validaNumeroAmigosLista() {
    if (listaDeAmigosSecretos.length < numeroMinimoAmigos) {
        alert(`El número de amigos debe ser mayor a ${numeroMinimoAmigos}`);
        return false;
    } else if (listaDeAmigosSecretos.length > numeroMaximoAmigos) {
        alert(`El número de amigos debe ser menor a ${numeroMaximoAmigos}`);
        return false;
    }
    return true;
}

function asignarParejasAmigoSecreto() {
    let amigosRestantes = [...listaDeAmigosSecretos]; // Copia de la lista de amigos
    listaParejasAmigosSecretos = []; // Limpiar lista de parejas antes de un nuevo sorteo

    for (let i = 0; i < listaDeAmigosSecretos.length; i++) {
        let amigo1 = listaDeAmigosSecretos[i];
        let amigo2Index;

        // Asegurarse de que el amigo no sea asignado a sí mismo
        do {
            amigo2Index = Math.floor(Math.random() * amigosRestantes.length);
        } while (amigosRestantes[amigo2Index] === amigo1);

        let amigo2 = amigosRestantes[amigo2Index];
        listaParejasAmigosSecretos.push(`${amigo1} es asignado a ${amigo2}`);

        // Eliminar el amigo asignado para evitar duplicados
        amigosRestantes.splice(amigo2Index, 1);
    }

    console.log("Lista de Parejas de Amigos Secretos:", listaParejasAmigosSecretos);
}

function sorteoDeAmigosSecretos() {
    if (validaNumeroAmigosLista()) {
        asignarParejasAmigoSecreto();
        asignarTexto('textoPantalla', "Lista de Parejas de Amigos Secretos:\n" + listaParejasAmigosSecretos.join('\n'));
        alert("El sorteo se ha realizado con éxito.");
    }
}

function asignarTexto(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}