import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

const Favoritos = () => {
    const { favoritos, quitarFavorito } = useContext(FavoritosContext);

    return (
        <main className="pagina">
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold text-body-emphasis">Favoritos</h1>
            </div>
            
            <div class="eventos py-5 bg-body-tertiary">
                <div class="container">

                    {favoritos.length === 0 ? (
                        <p>No tienes eventos en favoritos.</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Evento</th>
                                    <th className="align-right" scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {favoritos.map(evento => (
                                    <tr key={evento.id}>
                                        <th scope="row">{evento.id}</th>
                                        <td>{evento.titulo}</td>
                                        <td className="align-right" >
                                            <button
                                                className="btn btn-link text-decoration-none text-danger p-0"
                                                onClick={() => quitarFavorito(evento.id)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                </div>
            </div>
        

        </main>
    );
};

export default Favoritos;