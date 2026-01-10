fetch("00_inicio.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("menu-container").innerHTML = data;
  })
  .catch(error => console.error("Error cargando el menú:", error));
