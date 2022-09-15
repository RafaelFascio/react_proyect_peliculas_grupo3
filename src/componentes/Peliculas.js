import React from 'react';

class Peliculas extends React.Component{
    render () {
        return(
            <main>
                <section className="peliculas">
                    <div className="contenedor">
                        <h2 className="titulo">{this.props.titulo}</h2>
                        <p className="descripcion">{this.props.descripcion}</p>
                        <div className="botones">
                            <a href="#top">Reproducir</a>
                            <a
                                href={"https://www.youtube.com/watch?v=YrbdN5zaouU"} 
                                className="thing"
                                onMouseEnter={() => this.setState({ showSomething: true })}
                            >
                                {"Ver Trailer"}
                            </a>
                            
                        </div>
                    </div>
                </section>
                <section className="pelicula2">
                    <div className="contenedor">
                        <h2 className="titulo">{this.props.titulo}</h2>
                        <p className="descripcion">{this.props.descripcion}</p>
                        <div className="botones">
                            <a href="top">Reproducir</a>
                            <a
                                href={"https://www.youtube.com/watch?v=ad0c1hgWABI"} 
                                className="thing"
                                onMouseEnter={() => this.setState({ showSomething: true })}
                            >
                                {"Ver Trailer"}
                            </a>
                        </div>
                    </div>
                </section>
                <section className="pelicula3">
                    <div className="contenedor">
                        <h2 className="titulo">{this.props.titulo}</h2>
                        <p className="descripcion">{this.props.descripcion}</p>
                        <div className="botones">
                            <a href="top">Reproducir</a>
                            <a
                                href={"https://www.youtube.com/watch?v=m8e-FF8MsqU"} 
                                className="thing"
                                onMouseEnter={() => this.setState({ showSomething: true })}
                            >
                                {"Ver Trailer"}
                            </a>
                            
                        </div>
                    </div>
                </section>
                <section className="pelicula4">
                    <div className="contenedor">
                        <h2 className="titulo">{this.props.titulo}</h2>
                        <p className="descripcion">{this.props.descripcion}</p>
                        <div className="botonesNegros">
                            <a href="top">Reproducir</a>
                            <a
                                href={"https://www.youtube.com/watch?v=DMOBlEcRuw8"} 
                                className="thing"
                                onMouseEnter={() => this.setState({ showSomething: true })}
                            >
                                {"Ver Trailer"}
                            </a>
                            
                        </div>
                    </div>
                </section>
                <section className="pelicula5">
                    <div className="contenedor">
                        <h2 className="titulo">{this.props.titulo}</h2>
                        <p className="descripcion">{this.props.descripcion}</p>
                        <div className="botonesNegros">
                            <a href="top">Reproducir</a>
                            <a
                                href={"https://www.youtube.com/watch?v=NfxnnSlW39k"} 
                                className="thing"
                                onMouseEnter={() => this.setState({ showSomething: true })}
                            >
                                {"Ver Trailer"}
                            </a>
                            
                        </div>
                    </div>
                </section>
             </main>
        );
    }
}

export default Peliculas;