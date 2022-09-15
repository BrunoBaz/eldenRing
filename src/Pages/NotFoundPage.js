import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section className="body-notfound">
      <h1>¡YOU DIED!</h1>
      NO ENCONTRAMOS LA PAGINA QUE ESTAS BUSCANDO
      <Link to="/" className="goregister">
        <button type="submit" className="boton-para-loguearse">
          volver al inicio
        </button>
      </Link>
    </section>
  );
};
