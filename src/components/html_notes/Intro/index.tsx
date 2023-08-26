function Intro() {
  return (
    <div className="body">
      <h1>* Para que se utiliza HTML? *</h1>

      <p>
        HTML se utiliza para describir la <strong>Estructura</strong> de una
        página en un sitio web, esto se hace usando etiquetas "<code
        >&lt;h1&gt;</code
        ><code>&lt;/h1&gt;</code>".
      </p>

      <p>Con las etiquetas podemos agregar a una página elementos como:</p>

      <ul>
        <li>texto</li>
        <li>listas</li>
        <li>imagenes</li>
        <li>enlaces</li>
        <li>secciones</li>
        <li>botones</li>
        <li>tablas</li>
        <li>formularios</li>
        <li>videos</li>
      </ul>

      <p>
        La estructura de una página se describe en un archivo de texto, este
        archivo se conoce como archivo html, frecuentemente se usa el nombre
        "index" para el archivo.
      </p>

      <p>Ejemplo:</p>

      <p>
        {`index.html ---> ".html" se conoce como la extensión del archivo o el tipo
        de documento.`}
      </p>

      <p>
        --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>

      <h2>* Qué hay dentro de un archivo HTML? *</h2>

      <p>
        Un archivo html tiene un contenido básico como el del siguiente ejemplo:
      </p>

      <p><code>&lt;!DOCTYPE html&gt;</code></p>

      <p>&emsp;<code>&lt;html&gt;</code></p>

      <p>&emsp;&emsp;<code>&lt;head&gt;</code></p>

      <p>&emsp;&emsp;&emsp;<code>&lt;title&gt;</code></p>
      <p>&emsp;&emsp;&emsp;<code>&lt;/title&gt;</code></p>

      <p>&emsp;&emsp;<code>&lt;/head&gt;</code></p>

      <p>&emsp;&emsp;<code>&lt;body&gt;</code></p>

      <p>&emsp;&emsp;<code>&lt;/body&gt;</code></p>

      <p>&emsp;<code>&lt;/html&gt;</code></p>

      <h3> <code>&lt;!DOCTYPE html&gt;</code></h3>

      <p>Describe que el tipo de documento es html.</p>

      <h3> <code>&lt;html&gt;</code></h3>

      <p>Describe un contenedor para los elementos html del documento.</p>

      <h3> <code>&lt;head&gt;</code></h3>

      <p>Describe un contenedor para los datos del documento.</p>

      <h3> <code>&lt;title&gt;</code></h3>

      <p>Describe el título del documento.</p>

      <h3> <code>&lt;body&gt;</code></h3>

      <p>Describe un contenedor para los elementos dentro del documento.</p>

      <p>
        --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>

      <h2>* Regla de etiqueta *</h2>

      <p>
        Cada par de etiquetas contiene una etiqueta de apertura
        <code>&lt;h1&gt;</code> y una de cierre <code>&lt;/h1&gt;</code> que tiene
        una diagonal al principio.
      </p>

      <p>El contenido va entre las etiquetas de apertura y cierre.</p>

      <p>
        * Algunas etiquetas no tienen una etiqueta de apertura ni contenido, como
        <code>&lt;br /&gt;</code> que se usa para agregar un espacio entre
        elementos.
      </p>

      <a href="../text/text.html">Etiquetas para texto.</a>


    </div>
  );
}

export default Intro;