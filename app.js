// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
    listaAmigos.push(nuevoAmigo);
    console.log(listaAmigos);
    return listaAmigos;

}
