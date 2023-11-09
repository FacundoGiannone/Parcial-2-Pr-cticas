(async () => {
    traercasa();
})()
function traercasa() {

    const jhttp = new XMLHttpRequest();

    jhttp.open('GET', "habit.json", true);
    jhttp.send();

    jhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let resultado = document.querySelector(".maincards");
            resultado.innerHTML = ``;
            for (item in datos) {
                

                resultado.innerHTML += ` 
                <div class="prodcard">
                    <div class="prodimg">
                        <img class="pimagen" src="${datos[item].imagen}" alt="mapa">
                    </div>
                    <div class="prodinfo">
                        <h4 class="ptt">${datos[item].nombre}</h4>
                        <div class="ubicacion">
                            <h6 class="txticon">${datos[item].direccion}</h6>
                            <a href="${datos[item].linkdireccion}">VER EN MAPA</a>
                        </div>
                        <div class="iconos">
                            <div>
                                <img class="icn" src="tamaño.png" alt="">
                                <h6 class="txticon">${datos[item].tamaño}</h6>
                            </div>
                            <div>
                                <img class="icn" src="habitaciones.png" alt="">
                                <h6 class="txticon">${datos[item].dormitorios}</h6>
                            </div>
                            <div>
                                <img class="icn" src="baños.png" alt="">
                                <h6 class="txticon">${datos[item].baños}</h6>
                            </div>
                            <div>
                                <img class="icn" src="cochera.png" alt="">
                                <h6 class="txticon">${datos[item].cochera}</h6>
                            </div>
                        </div>
                        <div class="descripcion">
                            <p class="desprod">${datos[item].descripcion}</p>
                        </div>
                        <div class="precio">
                            <h6 class="txtprec">${datos[item].tipodeprecio}:</h6>
                            <h5 class="txtprec">U$D ${datos[item].precio}</h5>
                        </div>
                        <div class="masboton">
                            <a class="btn" href="HabHotJohann.html">
                                <div class="boton">
                                    <h6 class="texbtn">VER EN DETALLE</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    </div>`;
                }
            }
    
        }
    
    
    
    }