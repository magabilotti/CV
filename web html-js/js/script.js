const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML=`
        <nav class="navbar navbar-dark bg-light2">
            <div class="container-fluid">
                <div class="col-1 text-center">
                    <img class="pna-logo" src="img/pna-logo.png" alt="">
                </div>
                <div class="col-10 d-none d-lg-block text-center">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <div class="row justify-content-center pb-3">
                                <div class="col-3 redes"><a href="https://twitter.com/PrefecturaNaval"><img class="hvr-bounce-in" src="img/icon/twitter-white.png" style="width: 1.5rem;"></a></div>
                                <div class="col-3 redes"><a href="https://www.instagram.com/accounts/login/?next=/prefecturanaval/"><img class="hvr-bounce-in" src="img/icon/instagram-white.png" style="width: 1.5rem;"></a></div>
                                <div class="col-3 redes"><a href="https://www.youtube.com/c/prefecturanavalar"><img class="hvr-bounce-in" src="img/icon/youtube-white.png" style="width: 2rem;"></a></div>
                                <div class="col-3 redes"><a href="https://www.facebook.com/prefecturanavalar"><img class="hvr-bounce-in" src="img/icon/facebook-white.png" style="width: 1rem;"></a></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`

footer.innerHTML=`
<div class="container-fluid">
   <div class="row justify-content-center align-items-center text-center">
   <div class="row container-fluid footerplataforma p-0 justify-content-center">
            <ul class="nav nav-tabs" style="display: flex; justify-content: center;">
                <li class="nav-item" style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
                    <a class="nav-link infomore active" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" onclick="scrollToFooter('#footer-section', true)" aria-controls="multiCollapseExample1">INFO +</a>
                </li>
            </ul>
            <div class="row container-fluid p-0 m-0">
            <div class="col p-0 infomore">
                <div class=" collapse multi-collapse" id="multiCollapseExample1">
                    <div class="col-sm-4 col-12 card card-body info">
                        <div class="infomore"><h4>ESCUELAS DE LA PNA</h4><p>División Ingresos<br>Crucero Gral. Belgrano Nº 302<br>Zárate, Buenos Aires (CP 2800)</p></div>
                    </div>
                    <div class="col-sm-4 col-12 card card-body info">
                        <div class="infomore"><h4>VÍAS DE CONTACTO</h4><p>+54 11 45767610/11 (int 118/120)(CABA)<br> 03487-438013 (int 114/210)<br>ingresosaprefectura@prefecturanaval.edu.ar<br>https://argentina.gob.ar/prefecturanaval</p>
                        </div>
                    </div>
                    <div class="col-sm-4 col-12 card card-body info">
                        <div class="infomore"><h4>DIRECCIÓN DE EDUCACIÓN</h4><p>División Ingreso y Difusión<br>Av. Corrientes Nº 345 - Piso 12.<br>CABA, Argentina</p><br>    
                        </div>
                    </div>
                    <div>
                        <hr class="col-md-3 col-0" style="color: rgba(0, 0, 0, 0); float: left;">
                        <hr class="col-md-6 col-12" style="color: #707070; float: left;">
                        <hr class="col-md-3 col-0" style="color: rgba(0, 0, 0, 0); float: left;">
                    </div>
                    <div class="row justify-content-center pb-3">
                        <div class="col-12 text-center">
                            <a href="https://twitter.com/PrefecturaNaval" class="mx-2"><img class="hvr-bounce-in" src="img/icon/twitter.png" style="width: 3rem; height: 3rem;"></a>
                            <a href="https://www.instagram.com/accounts/login/?next=/prefecturanaval/" class="mx-2"><img class="hvr-bounce-in" src="img/icon/instagram.png" style="width: 2.5rem; height: 2.5rem;"></a>
                            <a href="https://www.youtube.com/c/prefecturanavalar" class="mx-2"><img class="hvr-bounce-in" src="img/icon/youtube.png" style="width: 3rem; height: 2rem;"></a>
                            <a href="https://www.facebook.com/prefecturanavalar" class="mx-2"><img class="hvr-bounce-in" src="img/icon/facebook.png" style="width: 3rem; height: 3rem;"></a>
                        </div>
                    </div>
                </div>
            </div>
            <p class="py-3">Diseño, Desarrollo Web y Contenidos | Dirección de Educación | División Plataformas Educativas | PNA 2024</p>
        </div>
    </div>
  `

  function scrollToFooter(element, smoothScroll) {
    var el = document.querySelector(element);
    var offset = el.getBoundingClientRect().top + window.scrollY;
    var windowHeight = window.innerHeight;
    var footerHeight = el.clientHeight;
    var scrollTo = offset - (windowHeight - footerHeight);
    if (smoothScroll) {
        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo(0, scrollTo);
    }
}