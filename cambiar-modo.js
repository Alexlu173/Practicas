function cambiarModo() {
  const botonModo = document.getElementById("theme-controller");
  const temaGuardado = localStorage.getItem("theme");

  if (temaGuardado) {
    document.documentElement.dataset.theme = temaGuardado;
    botonModo.checked = temaGuardado === "dark";
  }

  botonModo.addEventListener("click", () => {
    const nuevoTema = botonModo.checked ? "dark" : "light";
    document.documentElement.dataset.theme = nuevoTema;
    localStorage.setItem("theme", nuevoTema);
  });
}

cambiarModo();