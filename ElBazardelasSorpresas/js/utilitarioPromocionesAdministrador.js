/*<input type="radio" name="radioTipoPromocion" value="1" id="porArticulo" checked>por Artículo
<input type="radio" name="radioTipoPromocion" value="2" id="porGenero">por Genero
<input type="radio" name="radioTipoPromocion" value="3" id="porAutor">por Autor
<input type="radio" name="radioTipoPromocion" value="4" id="General">General*/

/*<label for="txt-idCodigo">Codigo item</label>
<input type="number" name="numCodigo" id="idCodigo" disabled="false">
<label for="txt-nombreItem">Nombre item</label>
<input type="text" name="nomItem" id="nombreItem" disabled="false">*/

/*<div class="input-container">
<p>Ganador de premio nobel</p>
<p>
    <input type="radio" name="radioNobelPaz" value="si" id="siGanaPremio">Sí
    <input type="radio" name="radioNobelPaz" value="no" id="noGanaPremio" checked>No
</p>
<p>
    <input type="date" name="premio" id="fechaPremio" disabled="false">
</p>

</div>*/
/*      <input type="radio" name="radioTipoPromocion" value="1" id="porArticulo" checked>por Artículo
                    <input type="radio" name="radioTipoPromocion" value="2" id="porGenero">por Genero
                    <input type="radio" name="radioTipoPromocion" value="3" id="porAutor">por Autor
                    <input type="radio" name="radioTipoPromocion" value="4" id="General">General */
//procedimiento seleccionar Premio Nobel
const idCodigo = document.getElementById('idCodigo');
const nombreItem = document.getElementById('nombreItem');

//evento por Articulo
document.getElementById('porArticulo').addEventListener('click', function(e) {
    idCodigo.disabled = false;
    nombreItem.disabled = false;
});

document.getElementById('porGenero').addEventListener('click', function(e) {
    idCodigo.disabled = false;
    nombreItem.disabled = false;
});

document.getElementById('porAutor').addEventListener('click', function(e) {
    idCodigo.disabled = false;
    nombreItem.disabled = false;
});

document.getElementById('General').addEventListener('click', function(e) {
    idCodigo.disabled = true;
    nombreItem.disabled = true;
});