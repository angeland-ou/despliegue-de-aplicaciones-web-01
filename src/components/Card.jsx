import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

const Card = ({ evento }) => {
    const { favoritos, agregarFavorito, quitarFavorito } =
        useContext(FavoritosContext);

    const esFavorito = favoritos.some(f => f.id === evento.id);

    const toggleFavorito = (e) => {
        e.preventDefault();

        if (esFavorito) {
            quitarFavorito(evento.id);
        } else {
            agregarFavorito(evento);
        }
    };

    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                    <p>
                        <a
                            href="#"
                            className="text-decoration-none"
                            onClick={toggleFavorito}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className={`bi bi-suit-heart-fill ${
                                    esFavorito ? "text-danger" : "text-secondary"
                                }`}
                                viewBox="0 0 16 16"
                            >
                                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
                            </svg>
                        </a>

                        <span>{evento.categoria}</span>
                    </p>

                    <h4 className="card-title">{evento.titulo}</h4>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>Fecha:</strong> {evento.fecha}
                    </li>
                    <li className="list-group-item">
                        <strong>Lugar:</strong> {evento.lugar}
                    </li>
                </ul>

                <div className="card-body">
                    <Link
                        to={`/evento/${evento.id}`}
                        className="btn btn-primary"
                    >
                        Ver evento
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
