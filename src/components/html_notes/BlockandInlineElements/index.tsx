function BlockandInlineElements() {
    return (
      <div className="body">
        <h1>* Etiquetas de nivel Bloque y nivel Línea *</h1>
  
        <p>
          Cada elemento HTML tiene un valor de visualización predeterminado, según
        el tipo de elemento que sea.
        </p>

        <p>Hay dos valores de visualización: bloque y en línea.</p>
  
        <h2>* Elementos a nivel de bloque *</h2>
  
        <p>
          Un elemento a nivel de bloque siempre comienza en una nueva línea y los
        navegadores automáticamente agregan algo de espacio (un margen) antes y
        después del elemento.
        </p>
  
        <p>
          Un elemento a nivel de bloque siempre ocupa todo el ancho disponible (se
        extiende hacia la izquierda y hacia la derecha tanto como puede).
        </p>
  
       <p>{`Ejemplos: "h1", "p"`}</p>
  
       <h2>* Elementos en línea *</h2>
  
       <p>Un elemento en línea no comienza en una nueva línea.</p>
  
       <p>Un elemento en línea solo ocupa el ancho necesario.</p>
  
       <p>{`Ejemplos: "a", "img"`}</p>
  
       <a href="../contenedores/index.html"> Etiquetas para contenedores.</a>
  
  
      </div>
    );
  }
  
  export default BlockandInlineElements;