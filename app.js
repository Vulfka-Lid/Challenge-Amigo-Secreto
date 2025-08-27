// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {

    if (document.getElementById("amigoAgregado").innerHTML === "No hay amigos para sortear."){
        document.getElementById("amigoAgregado").innerHTML = "";
    }
    let nuevoAmigo = document.getElementById("amigo").value;

    if (/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]/g.test(nuevoAmigo)) {
        document.querySelector(".error").classList.add("active");
        document.getElementById("amigo").value = "";
        return listaAmigos;
    } else {
        document.querySelector(".error").classList.remove("active");
        listaAmigos.push(nuevoAmigo);
        document.getElementById("amigoAgregado").innerHTML += `<p>${nuevoAmigo}</p>`;
        console.log(listaAmigos);
        document.getElementById("amigo").value = "";
        return listaAmigos;
    }
 
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        document.getElementById("amigoAgregado").innerHTML = "No hay amigos para sortear.";
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("amigoAgregado").innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    listaAmigos.splice(0, listaAmigos.length);

}