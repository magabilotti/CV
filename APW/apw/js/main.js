window.addEventListener('DOMContentLoaded', function() {

    //intalacion de nuestra PWA
    let btnInstall= document.querySelector('.btn-install')
    let eventInstall;

    //escuchar el evelnto beforeinstallpromp
    window.addEventListener('beforeinstallprompt',event =>{
        event.preventDefault();
        eventInstall=event;

        //nos fijamos si tenemos el boton de instalacion en la pagina
        if(btnInstall != undefined){
            setTimeout(function() {
            btnInstall.style.display = 'inline-block';
            btnInstall.addEventListener('click',installApp); }, 5000);
        }
    })

    //creamos una funcion para instalar la app
    let installApp = () => {
        if(eventInstall != undefined){
            //usamos el metodo prompt del objeto del eveneto del beforeinstallpromp
            eventInstall.prompt();
            eventInstall.userChoice
                        .then(respuesta =>{
                            if(respuesta.outcome =='accepted'){
                                console.log('el usuario acepto instalar');
                                btnInstall.style.display ='none';

                            }else{
                                console.log('el usuario no acepto instalacion:(');
                            }
                        })
        }
    }

//registramos nuestro SW
//paso 1: verificamos si el navegador acepta sw
if('serviceWorker' in navigator){
    //paso 2: registramos el archivo sw.js
    navigator.serviceWorker.register('js/sw.js')
    .then(registration =>{
     console.log(registration);   
    })
    .catch(rejeted =>{
        console.error(rejected);
    })
}
//fin registro Service Worked

//traer los Datos de la API y mostrarlos en personajes.html
fetch("https://apisimpsons.fly.dev/api/personajes?limit=649&page=1")
    .then(response => response.json())
    .then(data => {
      //console.log('peronajes:', data); // personajes 

    let Simpson = data.docs; //muetsro lista de personajes en consola
    Simpson.forEach(item => {
      //console.log(item.Nombre);
      //construccion de las Cards

      let cards = document.getElementById('cards') 
            let divCard = document.createElement('div')
                divCard.classList.add('card','col-3')
                divCard.title = item.Nombre
            let buttonCard = document.createElement('button')
                buttonCard.classList.add('btn', 'btn-primary');
            let Imagen = document.createElement('img')
                Imagen.setAttribute('src', item.Imagen)
                Imagen.classList.add('card-img-top')
            let cardBody = document.createElement('div')
                cardBody.classList.add('card-body')
            let Nombre = document.createElement('h5')
                Nombre.textContent = item.Nombre
                Nombre.classList.add('card-title')

            let modal = document.createElement('div')
                modal.setAttribute('id','modal-'+item._id)
                modal.classList.add('modal','fade')
                modal.setAttribute('aria-hidden', 'true')
                modal.setAttribute('tabindex', '-1')
                modal.setAttribute('aria-labelledby','exampleModalLabel')
            let modalDialog = document.createElement('div')
                modalDialog.classList.add('modal-dialog', 'modal-lg')
            let modalContent = document.createElement('div')
                modalContent.classList.add('modal-content')
            let modalHeader = document.createElement('div')
                modalHeader.classList.add('modal-header')
            let modalTitle = document.createElement('h5')
                modalTitle.classList.add('modal-title')
                modalTitle.textContent = item.Nombre
            let modalBody = document.createElement('div')
                modalBody.classList.add('modal-body')
            let Imagen1 = document.createElement('img')
                Imagen1.setAttribute('src', item.Imagen)
                Imagen1.classList.add('card-img-top')
            let Historia = document.createElement('p')
                Historia.textContent = 'Historia: '+item.Historia
                Historia.classList.add('card-text')
            let Genero = document.createElement('p')
                Genero.textContent = 'Genero: '+item.Genero
                Genero.classList.add('card-text')
            let Estado = document.createElement('p',)
                Estado.textContent = 'Estado: ' + item.Estado
                Estado.classList.add('card-text')
            let modalFooter = document.createElement('div')
                modalFooter.classList.add('modal-footer')
            let textModalFooter = document.createElement('p')
                textModalFooter.classList.add('text-modal-footer')
                textModalFooter.textContent = '* Para salir, tocar la tecla esc.'

            //al dar click sobre card genero modal
            buttonCard.addEventListener('click', function() {
                var modal = new bootstrap.Modal(document.getElementById("modal-"+item._id));
                modal.show();
            });

                      
        // Agregar el botón de favoritos
            let buttonFav = document.createElement('button');
                buttonFav.classList.add('btn', 'btn-warning');
                buttonFav.setAttribute('data-bs-dismiss', 'modal');
                buttonFav.setAttribute('id', '' + item._id);
                buttonFav.textContent = 'Agregar a mis favoritos';

                buttonFav.addEventListener('click', function() {
                    const cardId = item._id;
                    const favorites = localStorage.getItem('favorites');
                    if (favorites && favorites.includes(cardId)) {
                      alert('Esta tarjeta ya ha sido agregada a favoritos.');
                    } else {
                      if (!favorites) {
                        localStorage.setItem('favorites', JSON.stringify([cardId]));
                      } else {
                        const favoritesArray = JSON.parse(favorites);
                        favoritesArray.push(cardId);
                        localStorage.setItem('favorites', JSON.stringify(favoritesArray));
                      }
                      window.location.href = 'favorito.html';
                    }
                  });

        //imprimo
            cards.appendChild(divCard);
            divCard.appendChild(buttonCard);
            buttonCard.appendChild(Imagen);
            buttonCard.appendChild(cardBody);            
            buttonCard.appendChild(modal);
            modal.appendChild(modalDialog);
            modalDialog.appendChild(modalContent);
            modalContent.appendChild(modalHeader);
            modalHeader.appendChild(modalTitle);
            modalContent.appendChild(modalBody);
            modalBody.appendChild(Imagen1);
            modalBody.appendChild(Historia);
            modalBody.appendChild(Genero);
            modalBody.appendChild(Estado);
            modalBody.appendChild(buttonFav);
            modalContent.appendChild(modalFooter);
            modalFooter.appendChild(textModalFooter);
            cardBody.appendChild(Nombre);  
        }); 

    //buscador
    const inputBuscar = document.getElementById('buscar');

        //entrada texto input
        inputBuscar.addEventListener('keyup', (e) => {
        let texto = e.target.value.toLowerCase(); // convierto el texto
        const celdas = document.querySelectorAll('div[title]');
        
        //comparacion de la busqueda
        celdas.forEach((celda) => {
            const titulo = celda.getAttribute('title').toLowerCase(); // convierto el texto 
            if (titulo.includes(texto)) { //comparación de la busqueda
                celda.style.display = 'block'; // muestro card
                //console.log(celda);
            } else {
                celda.style.display = 'none'; // oculto card
                //console.log(celda);
            }
        });
    });

});
});

