let numeroDeAmigos = 0;
let numeroMaximoAmigos = 10;
let numeroMinimoAmigos = 4;
let listaDeAmigosSecretos = [];
let listaParejasAmigosSecretos =[];
let numeroMaximoDeSorteos = 0;


function agregarAmigos() 

            {
                let amigoAgregado = (document.getElementById('amigo').value);

                if (amigoAgregado.trim() === '') 
                {
                alert('Por favor, inserte un nombre.');
                }
                else 
                {
                
                   if (validarNombres(amigoAgregado))
                    {
                    listaDeAmigosSecretos.push(amigoAgregado);
                    
                    numeroDeAmigos ++;

                    limpiarCajaDeTexto();

                    console.log(numeroDeAmigos)    
                    console.log(amigoAgregado)
                    console.log(listaDeAmigosSecretos)
                    
                    return;
                    }
                }
            }

function validarNombres(amigoAgregado) 
            {
                if (listaDeAmigosSecretos.includes(amigoAgregado))
                    {
                    
                    alert('El nombre introducido ya existe, ingrese un nuevo');
                    return false; // Indica que el nombre no es válido
                    
                    }

                return true; // Indica que el nombre es válido
            }

function limpiarCajaDeTexto ()
            {
             document.getElementById('amigo').value = "";
            }

function validaNumeroAmigosLista () 
            {
                if (listaDeAmigosSecretos.length < numeroMinimoAmigos) 
                    {
                    alert(`El número de amigos debe ser mayor a ${numeroMinimoAmigos}`);
                    return false;
                    }

                else if (listaDeAmigosSecretos.length > numeroMaximoAmigos)
                    {
                    alert(`El número de amigos debe ser menor a ${numeroMaximoAmigos}`);
                    return false;
                    }
                
                return true;
            }

function generarAmigoSecreto ()
            {
                let numeroDeAmigoSorteado = (Math.floor(Math.random () * numeroDeAmigos) + 1);
                console.log (numeroDeAmigoSorteado)
                return numeroDeAmigoSorteado;
            }

function asignarParejasAmigoSecreto (numeroDeAmigoSorteado)
            {
                let amigo1 = generarAmigoSecreto ();
                let indiceAmigo1 =( listaDeAmigosSecretos.indexOf(amigo1));
                
                let amigo2 = generarAmigoSecreto();
                let IndiceAmigo2 = (listaDeAmigosSecretos.indexOf(amigo2));

                While (amigo1 === amigo2)
                    {
                    amigo2 = generarAmigoSecreto();
                    }
              

            }