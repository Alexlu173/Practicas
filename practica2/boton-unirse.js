const botonMiembro = document.getElementById("miembro");
botonMiembro.addEventListener("click", (e) => {
  e.target.value++;
  alert("Felicidades, eres el miembro número " + e.target.value);
});
