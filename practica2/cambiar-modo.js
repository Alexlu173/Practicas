function cambiarModo() {
  const botonModo = document.getElementById("theme-controller");
  const temaGuardado = localStorage.getItem("theme");
  const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? "dark"
    : "light";

  // Tema final: prioridad a localStorage, si no, la preferencia del sistema
  const temaFinal = temaGuardado || preferenciaSistema;

  document.documentElement.dataset.theme = temaFinal;

  botonModo.checked = temaFinal === "dark";

  botonModo.addEventListener("click", () => {
    const nuevoTema = botonModo.checked ? "dark" : "light";
    document.documentElement.dataset.theme = nuevoTema;
    localStorage.setItem("theme", nuevoTema);
  });
}

cambiarModo();
