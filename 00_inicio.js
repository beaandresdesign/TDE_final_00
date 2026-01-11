fetch("index.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("menu-container").innerHTML = data;
  })
  .catch(error => console.error("Error cargando el menú:", error));


  /* Aquí he intentado sintetizar la barra de menú para no tener que ponerlo en todos los html pero no sé porque no me sale*/
