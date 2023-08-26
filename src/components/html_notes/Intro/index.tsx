function Intro() {
  return (
    <div className="body">
      <h1>* Para que se utiliza HTML? *</h1>

      <p>
        {`HTML se utiliza para describir la <strong>Estructura</strong> de una
        página en un sitio web, esto se hace usando etiquetas "<h1></h1>".`}
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

      <p>{`<!DOCTYPE html>`}</p>

      <p>{`<html>`}</p>

      <p>{`<head>`}</p>

      <p>{`<title>`}</p>
      <p>{`</title>`}</p>

      <p>{`</head>`}</p>

      <p>{`<body>`}</p>

      <p>{`</body>`}</p>

      <p>{`</html>`}</p>

      <h3>{`<!DOCTYPE html>`}</h3>

      <p>Describe que el tipo de documento es html.</p>

      <h3>{`<html>`}</h3>

      <p>Describe un contenedor para los elementos html del documento.</p>

      <h3>{`<head>`}</h3>

      <p>Describe un contenedor para los datos del documento.</p>

      <h3>{`<title>`}</h3>

      <p>Describe el título del documento.</p>

      <h3>{`<body>`}</h3>

      <p>Describe un contenedor para los elementos dentro del documento.</p>

      <p>
        --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>

      <h2>* Regla de etiqueta *</h2>

      <p>
        {`Cada par de etiquetas contiene una etiqueta de apertura
        <h1> y una de cierre </h1> que
        tiene una diagonal al principio.`}
      </p>

      <p>El contenido va entre las etiquetas de apertura y cierre.</p>

      <p>
        {`* Algunas etiquetas no tienen una etiqueta de apertura ni contenido,
        como <br /> que se usa para agregar un espacio entre elementos.`}
      </p>

      <a href="../text/text.html">Etiquetas para texto.</a>
    </div>
  );
}

export default Intro;
