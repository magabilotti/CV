function listaTablePiezas(){
      let filasPorPagina = 100;
      let paginaActual = 1;

      function cambiarPagina(nuevaPagina) {
            if (nuevaPagina >= 1 && nuevaPagina <= Math.ceil(datos.length / filasPorPagina)) {
            paginaActual = nuevaPagina;
            renderizarTabla(paginaActual);
            renderizarPaginacion();
            }
      }

      const tableBodyPiezas = document.getElementById('table-body-pieza');
      const paginationElement = document.getElementById('paginationPiezas');

      function renderizarTabla(pagina) {
            tableBodyPiezas.innerHTML = ''; // Limpiar la tabla
            let filasPorPagina = 50;
      
            const inicio = (pagina - 1) * filasPorPagina;
            const fin = inicio + filasPorPagina;
            const piezasPagina = datos.slice(inicio, fin);

            piezasPagina.forEach((pieza, index) => {
                  filasPiezas(pieza, tableBodyPiezas);
            })
      }

      function renderizarPaginacion() {
            paginationElement.innerHTML = ''; // Limpiar la paginación
          
            const totalPaginas = Math.ceil(datos.length / filasPorPagina);
            const maxBotonesVisibles = 5; // Número máximo de botones de paginación visibles a la vez
            const rango = Math.floor(maxBotonesVisibles / 2);
          
            let inicio = Math.max(1, paginaActual - rango);
            let fin = Math.min(totalPaginas, inicio + maxBotonesVisibles - 1);
          
            // Botón Anterior
            const liAnterior = document.createElement('li');
                  liAnterior.classList.add('page-item');
            const aAnterior = document.createElement('a');
                  aAnterior.classList.add('page-link');
                  aAnterior.href = '#';
                  aAnterior.innerHTML = '&laquo;';
                  aAnterior.addEventListener('click', function () {
                        cambiarPagina(paginaActual - 1);
                  });
            liAnterior.appendChild(aAnterior);
            paginationElement.appendChild(liAnterior);

            if (totalPaginas > maxBotonesVisibles && paginaActual > rango + 1) {
                  const liPrimera = document.createElement('li');
                        liPrimera.classList.add('page-item');
                  const aPrimera = document.createElement('a');
                        aPrimera.classList.add('page-link');
                        aPrimera.href = '#';
                        aPrimera.textContent = '1';
                        aPrimera.addEventListener('click', function () {
                        cambiarPagina(1);
                  });
              liPrimera.appendChild(aPrimera);
              paginationElement.appendChild(liPrimera);
          
                  const liPuntosInicio = document.createElement('li');
                        liPuntosInicio.classList.add('page-item', 'disabled');
                  const spanPuntosInicio = document.createElement('span');
                        spanPuntosInicio.classList.add('page-link');
                        spanPuntosInicio.textContent = '...';
              liPuntosInicio.appendChild(spanPuntosInicio);
              paginationElement.appendChild(liPuntosInicio);
          
              inicio = Math.max(1, paginaActual - rango - 1);
              fin = Math.min(totalPaginas, inicio + maxBotonesVisibles - 1);
            }
          
            for (let i = inicio; i <= fin; i++) {
                  const li = document.createElement('li');
                        li.classList.add('page-item');
                  if (i === paginaActual) {
                        li.classList.add('active');
                  }
          
                  const a = document.createElement('a');
                        a.classList.add('page-link');
                        a.href = '#';
                        a.textContent = i;
          
                        a.addEventListener('click', function () {
                  cambiarPagina(i);
                  });
          
                  li.appendChild(a);
                  paginationElement.appendChild(li);
            }
          
            if (totalPaginas > maxBotonesVisibles && paginaActual < totalPaginas - rango) {
                  const liPuntosFin = document.createElement('li');
                        liPuntosFin.classList.add('page-item', 'disabled');
                  const spanPuntosFin = document.createElement('span');
                        spanPuntosFin.classList.add('page-link');
                        spanPuntosFin.textContent = '...';
                  liPuntosFin.appendChild(spanPuntosFin);
                  paginationElement.appendChild(liPuntosFin);
          
                  const liUltima = document.createElement('li');
                        liUltima.classList.add('page-item');
                  const aUltima = document.createElement('a');
                        aUltima.classList.add('page-link');
                        aUltima.href = '#';
                        aUltima.textContent = totalPaginas;
                        aUltima.addEventListener('click', function () {
                  cambiarPagina(totalPaginas);
              });
              liUltima.appendChild(aUltima);
              paginationElement.appendChild(liUltima);
            }

            // Botón Siguiente
            const liSiguiente = document.createElement('li');
                  liSiguiente.classList.add('page-item');
            const aSiguiente = document.createElement('a');
                  aSiguiente.classList.add('page-link');
                  aSiguiente.href = '#';
                  aSiguiente.innerHTML = '&raquo;';
                  aSiguiente.addEventListener('click', function () {
            cambiarPagina(paginaActual + 1);
            });
            liSiguiente.appendChild(aSiguiente);
            paginationElement.appendChild(liSiguiente);
      }
      
          // Llama a estas funciones para inicializar la tabla y la paginación en la primera página
          renderizarTabla(paginaActual, filasPorPagina);
          renderizarPaginacion();
}


function buscarPiezas() {
      // Obtener los valores de búsqueda
      const basico = document.getElementById("buscarBasico").value.toLowerCase();
      const prefijo = document.getElementById("buscarPrefijo").value.toLowerCase();
      const sufijo = document.getElementById("buscarSufijo").value.toLowerCase();
      const sufijo2 = document.getElementById("buscarSufijo2").value.toLowerCase();
    
      // Filtrar el array de datos
      const resultadosFiltrados = datos.filter((pieza) => {
        const partes = pieza.referencia.split('/').map(part => (part ? part.trim().toLowerCase() : ''));
    
        const basicoEnPieza = partes[0] || '';
        const prefijoEnPieza = partes[1] || '';
        const sufijoEnPieza = partes[2] || '';
        const sufijo2EnPieza = partes[3] || '';
    
        return (
          basicoEnPieza.includes(basico) &&
          prefijoEnPieza.includes(prefijo) &&
          sufijoEnPieza.includes(sufijo) &&
          sufijo2EnPieza.includes(sufijo2)
        );
      });
    
      // Limpia la tabla antes de mostrar los resultados filtrados
      const tableBodyPiezas = document.getElementById('table-body-pieza');
      tableBodyPiezas.innerHTML = '';

      // Obtén los primeros 50 elementos de los resultados filtrados
      const resultadosFiltradosLimitados = resultadosFiltrados.slice(0, 100);

      // Renderizar las filas filtradas en la tabla
      resultadosFiltradosLimitados.forEach((pieza) => {
            filasPiezas(pieza, tableBodyPiezas);
      });

      // Obtén referencias a los elementos de entrada
      const buscarInputBasico = document.getElementById("buscarBasico");
      const buscarInputPrefijo = document.getElementById("buscarPrefijo");
      const buscarInputSufijo = document.getElementById("buscarSufijo");
      const buscarInputSufijo2 = document.getElementById("buscarSufijo2");

      // Agrega el evento input a los campos de entrada
      buscarInputBasico.addEventListener("input", buscarPiezas);
      buscarInputPrefijo.addEventListener("input", buscarPiezas);
      buscarInputSufijo.addEventListener("input", buscarPiezas);
      buscarInputSufijo2.addEventListener("input", buscarPiezas);
}

function filasPiezas(pieza, tableBodyPiezas){
      const row = document.createElement('tr');
      // Crear celdas para cada propiedad de la pieza
      const codPiezaCell = document.createElement('td');
      const aPiezaCell = document.createElement('a');
            aPiezaCell.setAttribute('data-bs-target', '#modalPiezaView');
            aPiezaCell.setAttribute('data-bs-placement', 'bottom');
            aPiezaCell.setAttribute('data-bs-original-title', 'Ver detalle de pieza');

      const strongPiezaCell = document.createElement('strong');
            strongPiezaCell.textContent = pieza.referencia;
      aPiezaCell.appendChild(strongPiezaCell);
      codPiezaCell.appendChild(aPiezaCell);
      row.appendChild(codPiezaCell);

      const descripcionCell = document.createElement('td');
            descripcionCell.textContent = pieza.codigo_identificacion;
      row.appendChild(descripcionCell);

      const stockCell = document.createElement('td');
      const stockText = `${pieza.availability}`
            stockCell.textContent = stockText;
      row.appendChild(stockCell);

      //modal piezas
      aPiezaCell.addEventListener('click', function() {
      const modalPieza = document.getElementById('modalPiezaView');
      const modalContent = document.getElementById('modalContentView');
            modalContent.innerHTML = '';
      
      const detallesDiv = document.createElement('div');
            detallesDiv.classList.add('row');
      
      // Col-izq
      const colIzquierda = document.createElement('div');
      colIzquierda.classList.add('col-6');

      const codigoPiezaElement = document.createElement('p');
      codigoPiezaElement.innerHTML = `<strong>Código de la pieza:</strong> ${pieza.referencia}`;
      colIzquierda.appendChild(codigoPiezaElement);

      const descripcionElement = document.createElement('p');
      descripcionElement.innerHTML = `<strong>Descripción:</strong> ${pieza.codigo_identificacion}`;
      colIzquierda.appendChild(descripcionElement);

      detallesDiv.appendChild(colIzquierda);

      // Col-der
      const colDerecha = document.createElement('div');
      colDerecha.classList.add('col-6');
      
      //divisor
      const hrElement = document.createElement('hr');
      hrElement.classList.add('col-10','mx-auto');
      detallesDiv.appendChild(hrElement);
      //col-12
      const colFinal = document.createElement('div');
      colFinal.classList.add('col-12', 'text-center');

      const piezaSustitutaElement = document.createElement('p');
      if (pieza.otra_descripcion === "Empty") {pieza.otra_descripcion = "No existe";}
      piezaSustitutaElement.innerHTML = `<strong>Pieza sustituta:</strong> ${pieza.otra_descripcion}`;
      colFinal.appendChild(piezaSustitutaElement);

      detallesDiv.appendChild(colFinal);

      modalContent.appendChild(detallesDiv);
      const modalInstance = new bootstrap.Modal(modalPieza);
      modalInstance.show();
      });

      //sumar pieza al carro de compras 
      const actionsMore = document.createElement('td');
      const buttonPiezaMore = document.createElement('button');
      buttonPiezaMore.setAttribute('type', 'button');
      buttonPiezaMore.className = 'btn btn-outline-primary';
      buttonPiezaMore.setAttribute('data-bs-target', '#modalMorePieza');
      buttonPiezaMore.setAttribute('data-bs-original-title', 'cargar cantidad de piezas');
      const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svgElement.setAttribute("width", "18");
            svgElement.setAttribute("height", "18");
            svgElement.setAttribute("fill", "currentColor");
            svgElement.setAttribute("class", "bi bi-cart-plus-fill");
            svgElement.setAttribute("viewBox", "0 0 16 16");
      const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathElement.setAttribute("d", "M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z");
      svgElement.appendChild(pathElement);
      buttonPiezaMore.appendChild(svgElement);
      actionsMore.appendChild(buttonPiezaMore);

      //accion de click + pieza
      buttonPiezaMore.addEventListener('click', function(){
            const modalPieza = document.getElementById('modalMorePieza');
            const modalContent = document.getElementById('modalContentMore');
                  modalContent.innerHTML = '';
      
            const detallesDiv = document.createElement('div');
                  detallesDiv.classList.add('row');
      
            // Col-izq
            const colIzquierda = document.createElement('div');
                  colIzquierda.classList.add('col-10');
            const pedidoElement = document.createElement('p');
            if( mydate.type !== "Cliente") { 
                  pedidoElement.innerHTML = `<strong>${pedidos[0].id_order}</strong>`;
                  pedidoElement.innerHTML = `<strong>Número Pedido:</strong>`;
            colIzquierda.appendChild(pedidoElement);
            }else{
                  pedidoElement.className = 'd-none';
            }

            const codigoPiezaElement = document.createElement('p');
                  codigoPiezaElement.innerHTML = `<strong>${pieza.referencia}</strong>`;
            colIzquierda.appendChild(codigoPiezaElement);
            detallesDiv.appendChild(colIzquierda);
      
            // Col-der
            const colDerecha = document.createElement('div');
                  colDerecha.classList.add('col-2');
            
            const select = document.createElement("select");

            if (mydate.type !== "Cliente") {
              select.className = "form-select col-3";
              select.setAttribute("data-live-search", "true");
            
              const selectOption = document.createElement("option");
              selectOption.value = "selectionOption";
              selectOption.text = "Seleccionar un Pedido";
              selectOption.setAttribute("data-tokens", "selectionOption");
              selectOption.selected = true;
            
              select.appendChild(selectOption);
              console.log(pedidos);
              if(pedidos === `No orders`){
                        alert("No hay ordenes")
                  }else{
                  pedidos.forEach(pedido => {
                        const option = document.createElement("option");
                        option.value = pedido.id_order;
                        option.text = pedido.id_order;
                        option.setAttribute("data-tokens",pedido.id_order);
                        select.appendChild(option);
                  });
              }
              // Manejar el evento 'change' del elemento select
              select.addEventListener('change', function() {
                const numeroOrdenSeleccionado = parseInt(select.value);
                if (!isNaN(numeroOrdenSeleccionado)) {
                  numero_orden = numeroOrdenSeleccionado;
                  console.log('numero_orden:', numero_orden); 
                }
              });
            } else {
              select.className = 'd-none';
            }

            colDerecha.appendChild(select);

            const cantidadElement = document.createElement('p');
            const divGroup = document.createElement('div');
            divGroup.className = 'input-group mb-3';
            
            const decrementButton = document.createElement('button');
            decrementButton.className = 'btn btn-outline-secondary';
            decrementButton.type = 'button';
            decrementButton.id = 'decrementButton';
            decrementButton.textContent = '-';
            
            const incrementButton = document.createElement('button');
            incrementButton.className = 'btn btn-outline-secondary';
            incrementButton.type = 'button';
            incrementButton.id = 'incrementButton';
            incrementButton.textContent = '+';
            
            const quantityInput = document.createElement('input');
            quantityInput.className = 'form-control text-center';
            quantityInput.type = 'text';
            quantityInput.id = 'cantInput';
            quantityInput.value = '0';
            quantityInput.ariaLabel = 'Cantidad';
            quantityInput.ariaDescribedBy = 'incrementButton decrementButton';
            console.log(quantityInput.value);       
            
            // Agregar los botones e input al divGroup
            divGroup.appendChild(decrementButton);
            divGroup.appendChild(quantityInput);
            divGroup.appendChild(incrementButton);
            
            // Agregar divGroup al elemento colDerecha
            cantidadElement.appendChild(divGroup);
            colDerecha.appendChild(cantidadElement);
      
            detallesDiv.appendChild(colDerecha);
      
            modalContent.appendChild(detallesDiv);
            const modalInstance = new bootstrap.Modal(modalPieza);
                  modalInstance.show();
                  
            //incremento
            incrementButton.addEventListener("click", function () {
                  let currentValue = parseInt(quantityInput.value);
                  currentValue++;
                  quantityInput.value = currentValue;
                  console.log(quantityInput.value);
            });
            //decremento
            decrementButton.addEventListener("click", function () {
                  let currentValue = parseInt(quantityInput.value);
                  if (currentValue > 0) {
                  currentValue--;
                  }
                  quantityInput.value = currentValue
                  console.log(quantityInput.value);            
            });
  
            modalActionButtonMorePiezas.addEventListener('click', function () {   
                  const  mydate_id=`${mydate.id}`;

                  console.log(mydate_id);

                  if( mydate.type === "Cliente") {    
                        const orderData = {
                              "client_id": `${mydate.id}`,
                              "items": [
                                {
                                  "additionalProp1": {
                                    "id_product": `${pieza.id}`,
                                    "quantity": parseInt(quantityInput.value),
                                    "unitary_price": "1"
                                  }
                                }
                              ],
                              "branch": `${mydate.branch}`,
                              "status": "En espera"                           
                        };
                        console.log(orderData);
                        
                        fetch(`/pedidos/create`, {
                              method: 'post',
                              headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + token
                              },
                              body: JSON.stringify(orderData)
                        })
                        .then(response => {
                              if (response.ok) {
                                    const menuUsuarios = document.getElementById('Piezas');
                                    menuUsuarios.click();
                              alert('Pieza cargado exitosamente.');
                              } else {
                                  throw new Error('Error al cargar el pedido.');
                              }
                          })
                          .catch(error => {
                              alert('Error al cargar el pedido.');
                              console.error('Error:', error);
                          });
                        
                  }else{
                        const orderData = {
                              "order_number": `${numero_orden}`,
                              "client_id": `${mydate.id}`,
                              "items": [
                                {
                                  "additionalProp1": {
                                    "id_product": `${pieza.id}`,
                                    "quantity": parseInt(quantityInput.value),
                                    "unitary_price": "1"
                                  }
                                }
                              ],
                              "branch": `${mydate.branch}`,
                              "status": "Sin procesar"   
                        };
                        
                        fetch(`/pedidos/create`, {
                              method: 'post',
                              headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + token
                              },
                              body: JSON.stringify(orderData)
                        })
                        .then(response => {
                              if (response.ok) {
                              const menuUsuarios = document.getElementById('Piezas');
                                    menuUsuarios.click();
                              alert('Pieza cargado exitosamente.');
                              } else {
                              throw new Error('Error al cargar el pedido.');
                              }
                        })
                        .catch(error => {
                              alert('error al cargar pieza.');
                              console.error('Error:', error);
                        });

                  }
            })    
      })
      row.appendChild(actionsMore);
      tableBodyPiezas.appendChild(row);
}

listaTablePiezas();    
buscarPiezas();
orderSinProcesar(mytoken);
