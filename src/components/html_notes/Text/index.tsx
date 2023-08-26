function Text() {
  return (
    <div className="body">
      <h1>* Etiquetas para texto *</h1>

      <h2> Títulos o Encabezados</h2>

      <p>
        Si queremos agregar títulos a la página usamos las etiquetas "H", tienen
        un nivel de importancia que va del 1 hasta el 6.
      </p>

      <p>Ejemplos:</p>

      <h1>Título nivel 1: h1Título/h1</h1>
      <h2>Título nivel 2: h2Título/h2</h2>
      <h3>Título nivel 3: h3Título/h3</h3>
      <h4>Titulo nivel 4: h4Título/h4</h4>

      <h5>Título nivel 5: h5Título/h5</h5>
      <h6>Título nivel 6: h6Título/h6</h6>

      <h2> Párrafos</h2>

      <p>
        {`Para agregar un texto más largo o simplemente un texto que no sea un
        título usamos la etiqueta "P".`}
      </p>

      <p>Ejemplo:</p>

      <p>pEsto es un párrafo/p</p>

      <h2> Etiquetas dentro de etiquetas?</h2>

      <p>
        Podemos usar etiquetas dentro de un párrafo para cambiar el aspecto de
        una parte del texto.
      </p>

      <p>Ejemplos:</p>

      <p>
        Este es un ejemplo de texto en <strong>negritas</strong>. strong /strong
      </p>

      <p>
        Este es un ejemplo de texto en <i>italica</i>. i /i
      </p>

      <p>
        Este es un ejemplo de texto en <span>span</span>. span /span
      </p>

      <h2> Enlaces</h2>

      <p>
        {`Podemos agregar enlaces a otros documentos, estos enlaces son los que
        nos permiten "navegar" en internet.`}
      </p>

      <p>
        Los enlaces puden ser a otros sitios web (externo) o dentro del mismo
        sitio (interno).
      </p>

      <p>Ejemplos:</p>

      <a href="https://www.youtube.com/watch?v=malJUMz2A9Y">Enlace externo</a>
      <a href="../intro/intro.html">Enlace interno</a>

      <br />

      <a href="../lists/lists.html"> Etiquetas para listas.</a>
    </div>
  );
}

export default Text;
