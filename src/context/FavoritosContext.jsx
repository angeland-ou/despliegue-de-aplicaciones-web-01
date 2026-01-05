import { createContext, useState } from "react";

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([]);

    const agregarFavorito = (evento) => {
        const existe = favoritos.some(f => f.id === evento.id);
        if (!existe) {
            setFavoritos([...favoritos, evento]);
        }
    };

    const quitarFavorito = (id) => {
        setFavoritos(favoritos.filter(f => f.id !== id));
    };

    return (
        <FavoritosContext.Provider
            value={{ favoritos, agregarFavorito, quitarFavorito }}
        >
            {children}
        </FavoritosContext.Provider>
    );
};
