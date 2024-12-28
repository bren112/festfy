import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import banner from './org.png';

function Home() {
    return (
        <>
            <div className="marquee">
                <h1>REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐 | REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐 | REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐 | REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐 | REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐| REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐 | REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐| REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐 | REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐| REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐 | REVEILLON DA DIRETORIA!! | NÃO PERCA 🌐🌐🌐  </h1>
            </div>
            <br />
            <div className="container">
                <div className="esq">
                    <h1><span id='cursive'>Reveillon</span><br /><span id='logo_home'>DIRETORIA!</span></h1>
                    <Link to="/sobre">
                        <button>Saiba Mais!</button>
                    </Link>
                </div>

                <br />

                <div className="dir">
                    <img src={banner} alt="Banner" />
                    <Link to="">
                        <button>SUSPENSO!</button>
                    </Link>
                </div>
            </div>
            <br />
        </>
    );
}

export default Home;
