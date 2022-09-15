import React from 'react';

class HeaderPeliculas extends React.Component{
    render (){
        return(
            <header>
                <div class="contenedorHeader">
                    <img src="../image/logo.jpg" alt="logo" class="header-img"/>
                    <nav>
                        {/* <a
                            href={"http://127.0.0.1:5500/proyecto_peliculas/html/index.html"} 
                            className="thing"
                            onMouseEnter={() => this.setState({ showSomething: true })}
                        >
                            {"Inicio"}
                        </a> */}
                        <a href="#top">Inicio</a>
                        <a href="#top" class="activo">Peliculas</a>
                        <a href="#top">Mi lista</a>
                    </nav>
                </div>
            </header>
        );
    }
}
export default HeaderPeliculas;