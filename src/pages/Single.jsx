import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import { useParams } from "react-router-dom";
import data from "../data/eventos.json";

const Single = () => {

    const { id } = useParams();
    const { agregarFavorito, favoritos } = useContext(FavoritosContext);

    const evento = data.find(e => e.id === Number(id));
    const esFavorito = favoritos.some(f => f.id === evento?.id);

    if (!evento) {
        return (
            <p className="text-center text-danger fw-bold">
                Evento no encontrado
            </p>
        );
    }

    return (
        <main className="container py-5">
            <h1 className="mb-4">{evento.titulo}</h1>

            <ul className="list-group mb-4">
                <li className="list-group-item">
                    <strong>ID:</strong> {evento.id}
                </li>
                <li className="list-group-item">
                    <strong>Categoría:</strong> {evento.categoria}
                </li>
                <li className="list-group-item">
                    <strong>Fecha:</strong> {evento.fecha}
                </li>
                <li className="list-group-item">
                    <strong>Lugar:</strong> {evento.lugar}
                </li>
            </ul>

            <p className="lead">{evento.descripcion}</p>

            <button
                className="btn btn-danger"
                onClick={() => agregarFavorito(evento)}
                disabled={esFavorito}
            >
                {esFavorito ? "Ya en favoritos" : "Añadir a favoritos"}
            </button>
        </main>
    );


};

export default Single;