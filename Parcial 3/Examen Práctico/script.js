document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector(".Añadir");
  const input = document.getElementById("tareaInput");
  const lista = document.getElementById("listaTareas");
  boton.addEventListener("click", function () {
    const texto = input.value.trim();
    if (texto === "") return;
    const contenedor = document.createElement("div");
    contenedor.className = "tarea";
    const spanTexto = document.createElement("span");
    spanTexto.textContent = texto;
    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.addEventListener("click", function () {
      contenedor.nextSibling?.remove();
      contenedor.remove();
    });
    contenedor.appendChild(spanTexto);
    contenedor.appendChild(botonBorrar);
    lista.appendChild(contenedor);
    lista.appendChild(document.createElement("br"));
    input.value = "";
  });
});