document.addEventListener('DOMContentLoaded', function() {
    // Resto del código para obtener los datos de la API y construir las tarjetas originales
    fetch("https://apisimpsons.fly.dev/api/personajes?limit=649&page=1")
    .then(response => response.json())
    .then(data => {

      let Simpson = data.docs; // lista de personajes completa
  
    // Obtener el contenedor donde se mostrarán las tarjetas de los personajes favoritos
  const favoritesContainer = document.getElementById('favorites-container');

  // Obtener los personajes favoritos del almacenamiento local
  const favorites = localStorage.getItem('favorites');
  console.log(favorites); // muestra lista de personajes favoritos en consola

  // Verificar si hay personajes favoritos almacenados
  if (favorites) {
    const favoritesArray = JSON.parse(favorites);

    // Recorrer los personajes favoritos
    favoritesArray.forEach((favoriteId) => {
      // Buscar el personaje correspondiente al ID en la lista original de personajes
      const favoriteCharacter = Simpson.find((character) => character._id === favoriteId);
      console.log(favoriteCharacter);

      // Construir los personaje favorito
    let favoritesContainer = document.getElementById('favoritesContainer') 
        let divsFav = document.createElement('div')
            divsFav.classList.add('perFav');
        let divFav = document.createElement('div');
            divFav.classList.add('col-3', 'bloqueImg');
        let imagenFav = document.createElement('img');
            imagenFav.classList.add('img-fav');
            imagenFav.setAttribute('src', favoriteCharacter.Imagen);
        let divDetalleFav = document.createElement('div');
            divDetalleFav.classList.add('col-9', 'bloqueDetalle',);
        let detalleFav = document.createElement('h5');
            detalleFav.classList.add('dellateFav');
            detalleFav.textContent = 'Hola, soy ' + favoriteCharacter.Historia + ' Mi género es ' + favoriteCharacter.Genero + ' y estoy ' + favoriteCharacter.Estado + '.';

        //imprimo
        favoritesContainer.appendChild(divsFav);
        divsFav.appendChild(divFav);
        divFav.appendChild(imagenFav);
        divsFav.appendChild(divDetalleFav);
        divDetalleFav.appendChild(detalleFav);
        });
        }
    });
});