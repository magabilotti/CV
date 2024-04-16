const cards = document.querySelectorAll('.card');

document.addEventListener('DOMContentLoaded', function () {
    cards.forEach(card => {
        card.addEventListener('click', (event) => {

            console.log("Clic en una tarjeta de noticias");

            // Obtiene la URL de la noticia desde el atributo personalizado "data-url"
            const url = card.getAttribute('data-url');
            console.log(url)

            // Realiza una solicitud fetch para cargar el contenido de la noticia
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    // Coloca el contenido de la noticia en la sección de "noticias1"
                    const noticiasSection = document.querySelector('#noticias1');
                    noticiasSection.innerHTML = data;
                })
                .catch(error => {
                    console.error("Error al cargar la noticia:", error);
                });
        });
    });

    // Resto del código para cargar el contenido
});