const Contacto = () => {
    return (
        <main className="pagina centrada">
            <div className="px-4 py-5 text-center contacto">
                <h1 className="display-5 fw-bold text-body-emphasis">Contacto</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Si tienes algún evento que quieras añadir a nuestra web no dudes en ponerte en contacto con nosotros y enviarnos los datos de tu evento, estaremos encantados de añadirlo!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href="mailto:contacto@ejemplo.com" className="btn btn-primary btn-lg px-4 gap-3">Contacta por email</a>
                        <a href="tel:+34123456789" className="btn btn-outline-secondary btn-lg px-4">Contacta por teléfono</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contacto;