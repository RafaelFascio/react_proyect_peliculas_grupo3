import React from 'react';

class Pelicula extends React.Component{
    render () {
        return(
            <section className={this.props.numPelicula}>
                <div className="contenedor">
                    <h2 className="titulo">{this.props.titulo}</h2>
                    <p className="descripcion">{this.props.descripcion}</p>
                    <div className="botones">
                        <a href="#top">Reproducir</a>
                        <a
                            href={this.props.link} 
                            className="thing"
                            onMouseEnter={() => this.setState({ showSomething: true })}
                        >
                            {"Ver Trailer"}
                        </a>
                    </div>
                </div>
                <div className="espacio"></div>
            </section>
        );
    }
}

export default Pelicula;