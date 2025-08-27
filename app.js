// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {

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
