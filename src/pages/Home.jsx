import Card from "../components/Card";
import React, { useState, useEffect } from "react";
import data from "../data/eventos.json";

const Home = () => {
    const [eventos, setEventos] = useState([]);
    const [eventosFiltrados, setEventosFiltrados] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [categoriaActiva, setCategoriaActiva] = useState("Todas");

    useEffect(() => {
        try {
            setTimeout(() => {
                if (!data || data.length === 0) {
                    setError("No hay eventos disponibles.");
                } else {
                    setEventos(data);
                    setEventosFiltrados(data);

                    const categoriasUnicas = [
                        "Todas",
                        ...new Set(data.map(e => e.categoria))
                    ];
                    setCategorias(categoriasUnicas);
                }
                setLoading(false);
            }, 800);
        } catch {
            setError("Error al cargar los eventos.");
            setLoading(false);
        }
    }, []);

    const aplicarFiltros = (texto, categoria) => {
        let resultado = eventos;

        if (categoria !== "Todas") {
            resultado = resultado.filter(
                e => e.categoria === categoria
            );
        }

        if (texto.trim() !== "") {
            const t = texto.toLowerCase();
            resultado = resultado.filter(
                e =>
                    e.titulo.toLowerCase().includes(t) ||
                    e.descripcion.toLowerCase().includes(t) ||
                    e.lugar.toLowerCase().includes(t)
            );
        }

        setEventosFiltrados(resultado);
    };

    const handleBuscar = (e) => {
        e.preventDefault();
        aplicarFiltros(busqueda, categoriaActiva);
    };

    const filtrarPorCategoria = (categoria) => {
        setCategoriaActiva(categoria);
        aplicarFiltros(busqueda, categoria);
    };

    return (
        <main>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">Eventos</h1>

                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        QuickPlan | Agenda de eventos del centro
                    </p>

                    {!loading && !error && (
                        <form
                            className="d-flex justify-content-center"
                            role="search"
                            onSubmit={handleBuscar}
                        >
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Buscar"
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    )}
                </div>
            </div>

            <div className="eventos py-5 bg-body-tertiary">
                <div className="container">

                    {!loading && !error && (
                        <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
                            {categorias.map(cat => (
                                <button
                                    key={cat}
                                    className={`btn ${
                                        categoriaActiva === cat ? "btn-primary" : "btn-outline-primary"
                                    }`}
                                    onClick={() => filtrarPorCategoria(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* CONTADOR DINÁMICO */}
                    {!loading && !error && (
                        <p className="text-center fw-bold mb-3">
                            Mostrando {eventosFiltrados.length} de {eventos.length} eventos
                        </p>
                    )}

                    {loading && (
                        <p className="text-center fw-bold"> Cargando eventos...</p>
                    )}

                    {!loading && error && (
                        <p className="text-center text-danger fw-bold">
                            {error}
                        </p>
                    )}

                    {!loading && !error && (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {eventosFiltrados.length > 0 ? (
                                eventosFiltrados.map(item => (
                                    <Card key={item.id} evento={item} />
                                ))
                            ) : (
                                <p className="text-center">
                                    No se encontraron eventos.
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;
