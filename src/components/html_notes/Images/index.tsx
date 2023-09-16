function Images() {
  return (
    <div className="body">
      <h1>* Etiquetas para imágenes *</h1>

      <p>
        Podemos agregar una <strong>imagen</strong> a la página usando la
        etiqueta img.
      </p>

      <p>
        {`<img src="./img/logo-html5.png" alt="HTML5 logo" width="500" height="600"
        />`}
      </p>

      <p>Ejemplo:</p>

      <img
        src="https://www.tutorialmonsters.com/wp-content/uploads/2011/02/html.jpg"
        alt="HTML5 logo"
        width="350"
        height="250"
      />

      <p>
        {`Esta etiqueta necesita algo que se conoce como "atributos" para
        mostrarse correctamente en la página.`}
      </p>

      <p>{`Los "atributos" describen qué imagen se mostrará y cómo se vera.`}</p>

      <h3> src</h3>

      <p>Describe la ubicación de la imagen.</p>

      <h3> alt</h3>

      <p>
        Es una descripción de la imagen, se muestra cuando hay un error al
        mostrar la imagen.
      </p>

      <h3> width</h3>

      <p>Describe el ancho de la imagen, la medida son pixeles.</p>

      <h3> height</h3>
      <p>Describe la ancho de la imagen, la medida son pixeles.</p>
    </div>
  );
}

export default Images;
