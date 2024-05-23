let escuelas = [
    {
        escuela: "DIRECCION DE EDUCACION",
        descripcion: "La Direccion de Educacion es el organismo de la Prefectura responsable de la conduccion y supervision del Sistema Educativo, determinando las politicas educativas particulares para los distintos subsistemas que lo conforman. De este organismo dependen los Institutos y Centros de Formacion, Capacitacion o Extension Profesional. Ejerce la supervision academica de cursos no formales desarrollados en los distintos organismos de la Institucion y tambien la supervision de quienes realizan carreras o cursos en instituciones educativas no pertenecientes a la Prefectura.",
        url: "https://educacion.iusm.edu.ar/pev/dedu/",
        foto: "img/escuelas/DEDU.png",
        colorFondo: "#044e70"
    },
    {
        escuela: "ESCUELA SUPERIOR",
        descripcion: "La Escuela Superior se ocupa de la formacion continua de los Oficiales en distintas orientaciones: Navegacion, Seguridad de costas, Maquinas, Comunicaciones, Aviacion. A los que se agregan los cursos Mayor y Superior.",
        url: "https://educacion.iusm.edu.ar/pev/esup/",
        foto: "img/escuelas/ESUP.png",
        colorFondo: "#0f76ac"
    },
    {
        escuela: "ESCUELA DE CADETES DE PREFECTURA NAVAL ARGENTINA",
        descripcion: "El Departamento Académico Escuela de Oficiales se ocupa de la Formacion de los Oficiales. Los estudiantes egresan como Oficiales Ayudantes con el titulo de grado Universitario de Licenciado en Seguridad Maritima, Licenciado en Administracion y Contabilidad del Sector Publico con Orientacion en Administracion Maritima o de Pregrado de Analista Universitario en Seguridad del Trabajo en Buques y Ambito Portuario.",
        url: "https://educacion.iusm.edu.ar/pev/ecad/",
        foto: "img/escuelas/ECAD.png",
        colorFondo: "#044e70"
    },
    {
        escuela: "INSTITUTO DE FORMACION, CAPACITACION, PERFECCIONAMIENTO Y ACTUALIZACION DOCENTE",
        descripcion: "Los nuevos escenarios contemporaneos demandan la formacion y capacitacion de calidad para encarar la funcion del rol docente. Esto requiere de un desarrollo profesional permanente el cual se lleva a cabo en el IFDO. El Instituto tiene como pilar fundamental la articulacion y dinamizacion de las demandas, tanto internas como externas, para facilitar la practica de los docentes en sus contextos de actuacion.",
        url: "https://educacion.iusm.edu.ar/pev/ifdo/",
        foto: "img/escuelas/IFOR.png",
        colorFondo: "#0f76ac"
    },
    {
        escuela: "ESCUELA SUPERIOR DE INFORMATICA",
        descripcion: "La Escuela Superior de Informatica, dependiente de la Direccion de Educacion e integrada al Instituto Universitario de Seguridad Maritima, es la Unidad Academica encargada de la formacion y capacitacion del Personal en el area de informatica. A traves de la carrera y cursos que se dictan, la Institucion cuenta con personal capacitado para el manejo de las Tecnologias de la Informacion y Comunicacion (TIC); conformando asi la eficiencia de los recursos que posee.",
        url: "https://educacion.iusm.edu.ar/pev/esin/",
        foto: "img/escuelas/ESIN.png",
        colorFondo: "#044e70"
    },
    {
        escuela: "ESCUELA DE SUBOFICIALES DE PREFECTURA NAVAL ARGENTINA",
        descripcion: "El Departamento Academico Escuela de Suboficiales se ocupa de la formacion integral del personal subalterno. La formacion permite desempenarse eficazmente en prevencion, salvaguarda, apoyo y auxilio a las personas, los bienes y la navegacion en general. Los estudiantes egresan con el grado de Cabo Segundo con el titulo de Pregrado de Tecnico Universitario.",
        url: "https://educacion.iusm.edu.ar/pev/esub/",
        foto: "img/escuelas/ESUB.png",
        colorFondo: "#0f76ac"
    },
    {
        escuela: "INSTITUTOS DE FORMACION",
        descripcion: "Los Institutos de Formacion de la Prefectura Naval Argentina, tienen como objetivo principal formar a los jovenes y convertirlos en profesionales de la Seguridad y la Navegacion. De esta manera ellos podran unirse a los equipos humanos que realizan la salvaguarda de la vida en el mar. Atreves de sus escuelas, se adquieren las competencias necesarias para desempe?ar funciones en la Prefectura Naval Argentina.",
        url: "https://educacion.iusm.edu.ar/pev/ifor/",
        foto: "img/escuelas/IFOR.png",
        colorFondo: "#044e70"
    },
    {
        escuela: "DEPARTAMENTO ACADEMICO SUPERIOR DE SUBOFICIALES",
        descripcion: "El Departamento Academico Superior de Suboficiales (ASSB) tiene como premisa esencial proveer a todo el personal subalterno de una capacitacion que contemple los aspectos tecnicos especificos de especializacion, y a la vez, la apertura cultural que demanda una sociedad en continua transformacion. Ademas, brinda asesoramiento Tecnologico y Pedagogico en relacion a la Educacion a Distancia.",
        url: "https://educacion.iusm.edu.ar/pev/assb/",
        foto: "img/escuelas/ASSB.png",
        colorFondo: "#0f76ac"
    },
    {
        escuela: "CENTRO DE CAPACITACION Y ACTUALIZACION EN TELECOMUNICACIONES",
        descripcion: "Este centro capacita a los futuros Radiotecnicos de la institucion, asi como tambien forma Interpretes de Imagenes Satelitales y certifica la idoneidad de los Operadores de Estaciones Costeras.",
        url: "https://educacion.iusm.edu.ar/pev/ccat/",
        foto: "img/escuelas/CCAT.png",
        colorFondo: "#044e70"
    },
    {
        escuela: "CENTRO DE CAPACITACION EN INTELIGENCIA CRIMINAL E INVESTIGACIONES",
        descripcion: "Tiene como objeto ser el responsable de las politicas educativas de la Direccion de Inteligencia Criminal e Investigaciones , a traves de diferentes actividades de capacitacion y actualizacion permanente del personal, que deba desarrollar funciones especificas inherentes al area, brindando conocimientos actualizados de la normativa vigente, para enfrentar los cambiantes escenarios delictivos.",
        url: "https://educacion.iusm.edu.ar/pev/ccic/",
        foto: "img/escuelas/CCIC.png",
        colorFondo: "#0f76ac"
    },
    {
        escuela: "ESCUELA NACIONAL SUPERIOR DE SALVAMENTO Y BUCEO",
        descripcion: "La Escuela Nacional Superior de Salvamento y Buceo, capacita al Personal propio de la Prefectura como para otras fuerzas, becarios extranjeros y ciudadanos, a traves del dictado de diferentes cursos relacionados con las areas de ?Salvamento y Buceo?, ?Control de Averias e incendio? y ?Proteccion Ambiental?.",
        url: "https://educacion.iusm.edu.ar/pev/enss/",
        foto: "img/escuelas/ENSS.png",
        colorFondo: "#044e70"
    },
    {
        escuela: "CENTRO DE EXTENSION PROFESIONAL AERONAUTICA",
        descripcion: "El Centro de Extension Profesional Aeronautica (CEPA) entiende en la gestion de la formacion, capacitacion y actualizacion del Personal Superior, Subalterno y Civil de la Prefectura Naval Argentina en todos los aspectos relacionados con la actividad Aeronautica.",
        url: "https://educacion.iusm.edu.ar/pev/cepa/",
        foto: "img/escuelas/CEPA.png",
        colorFondo: "#0f76ac"
    },
    {
        escuela: "CENTRO DE PERFECCIONAMIENTO EN TECNOLOGIA NAVAL",
        descripcion: "Centro que entiende en la formacion, capacitacion y actualizacion del Personal Superior y Subalterno de la Prefectura Naval Argentina en todos los aspectos relacionados con la tecnologia a bordo de los buques, ampliandose la oferta educativa al personal de otras fuerzas armadas, de seguridad o policial, becarios extranjeros e instituciones civiles.",
        url: "https://educacion.iusm.edu.ar/pev/cptn/",
        foto: "img/escuelas/CPTN.png",
        colorFondo: "#044e70"
    },
    {
        escuela: "CENTRO DE ENTRENAMIENTO PROFESIONAL POLICIAL",
        descripcion: "El Centro de Entrenamiento Profesional Policial (CEPP), unidad academica que capacita al personal de la Prefectura Naval Argentina, como asi tambien a otras Fuerzas Armadas, de Seguridad, Policiales y becarios extranjeros, por intermedio de la catedra de distintas capacitaciones en relacion a tacticas policiales especiales, proteccion y escolta de personalidades, conocimiento y manejo de armas de fuego, proteccion de objetivos, entre otros.",
        url: "https://educacion.iusm.edu.ar/pev/cepp/",
        foto: "img/escuelas/CEPP.png",
        colorFondo: "#0f76ac"
    },
    {
        escuela: "CENTRO DE REENTRENAMIENTO Y PERFECCIONAMIENTO POLICIAL",
        descripcion: "El Centro de Reentrenamiento y Perfeccionamiento Policial (CRPP), capacita al Personal propio de la Prefectura como a otras fuerzas y becarios extranjeros, a traves del dictado de diferentes cursos relacionados con Control de Multitudes por alteracion  del Orden Publico como ser  ?Operador de Escudos?, en el uso de Armas no letales: ?Tonfa? y ?Tecnicas de Supervivencia Urbana Policial? entre otros.",
        url: "https://educacion.iusm.edu.ar/pev/crpp/",
        foto: "img/escuelas/CRPP.png",
        colorFondo: "#044e70"
    },
    {
        escuela: "CENTRO REGIONAL DE EXTENSION UNIVERSITARIA MAR DEL PLATA",
        descripcion: "El Centro Regional de Extension Universitaria  Mar del Plata abarca las jurisdicciones de la Prefectura Mar del Plata y la Prefectura Quequen con sus Dependencias y unidades subordinadas. Ocupandose de la Formacion y Capacitacion del personal, asi como de potenciar la relacion con la comunidad y otras organizaciones, en lo concerniente a las actividades del ambiente nautico, extendiendo asi los vinculos con la sociedad, favoreciendo la retroalimentacion de sus actividades docentes  y de investigacion.",
        url: "https://educacion.iusm.edu.ar/pev/dedu/mpla",
        foto: "img/escuelas/MPLA.png",
        colorFondo: "#0f76ac"
    }
];

const schoolsContainer = document.getElementById('schools');

escuelas.forEach((escuela, index) => {
    const divRow = document.createElement('div');
    divRow.className = 'row';

    const divEscuela = document.createElement('div');
    divEscuela.className = 'col-md-3 d-none d-md-block text-center';
    divEscuela.style.backgroundColor = 'white';
    
    const img = document.createElement('img');
    img.className = 'photo-escuela';
    img.src = escuela.foto;
    img.alt = escuela.escuela;
    
    const divImg = document.createElement('div');
    divImg.className = 'p-5';
    divImg.appendChild(img);

    const divImgCircle = document.createElement('div');
    divImgCircle.className = 'col-1 d-md-none text-center';
        
    const imgCircle = document.createElement('img');
    imgCircle.className = 'photo-escuela-circle pb-2';
    imgCircle.src = escuela.foto;
    imgCircle.alt = escuela.escuela;

    divImgCircle.appendChild(imgCircle);
    divEscuela.appendChild(divImg);

    const divDescripcion = document.createElement('div');
    divDescripcion.className = 'col-md-9 col-12';
    divDescripcion.style.backgroundColor = escuela.colorFondo;
    divDescripcion.style.padding = '5% 5%';

    const h4 = document.createElement('h4');
    h4.style.color = 'white';
    h4.textContent = escuela.escuela;

    const card = document.createElement('div');
    card.className = 'card card-body';
    card.style.backgroundColor = escuela.colorFondo;

    const divContenido = document.createElement('div');
    divContenido.className = 'tab-content p-0';
    divContenido.id = 'myTabContent1';

    const divDetalle = document.createElement('div');
    divDetalle.className = 'tab-pane p-0 fade show active';
    divDetalle.id = 'detalle11';
    divDetalle.role = 'tabpanel';
    divDetalle.setAttribute('aria-labelledby', 'home-tab');
    divDetalle.setAttribute('tabindex', '0');
    divDetalle.style.color = 'white';
    divDetalle.style.backgroundColor = escuela.colorFondo;
    divDetalle.textContent = escuela.descripcion;

    const divBoton = document.createElement('div');
    divBoton.className = 'd-grid gap-2 d-md-flex justify-content-md-end';

    const boton = document.createElement('a');
    boton.href = escuela.url;
    boton.target = '_blank';
    boton.className = 'btn btn-cursos-blanco';
    boton.type = 'button';
    boton.textContent = 'Ingresar a la Plataforma';

    // Agregar elementos al documento
    divContenido.appendChild(divDetalle);
    card.appendChild(divContenido);
    divBoton.appendChild(boton);
    divDescripcion.appendChild(h4);
    divDescripcion.appendChild(card);
    divDescripcion.appendChild(divBoton);

    // Alternar la posición de la imagen y la descripción
    if (index % 2 === 0) {
        divRow.appendChild(divDescripcion);
        divRow.appendChild(divEscuela);
    } else {
        divRow.appendChild(divEscuela);
        divRow.appendChild(divDescripcion);
    }

    divDescripcion.insertBefore(divImgCircle, h4);
    schoolsContainer.appendChild(divRow);
});