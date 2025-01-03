import React, { useEffect, useState } from 'react';
import './Atracoes.css';
import djmoi from './moi2.png';
import barulho from './barulhento.png'
import palco from './palco.jpeg';
import paredao from './paredao.jpeg';
import virtu from './virtu.png'
function Atracoes() {
    const [progress, setProgress] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controle do modal

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 1 : 0));
        }, 100);

        return () => clearInterval(interval); 
    }, []);

    // Função para abrir o modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="atracoes">
            {/* Imagem que abre o modal ao ser clicada */}
            <img 
                id="imgsobre" 
                src={djmoi} 
                alt="DJ Moi" 
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
            />
            <img 
                id="imgsobre" 
                src={barulho} 
                alt="DJ Barulho" 
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
            />
            <img 
                id="imgsobre" 
                src={virtu} 
                alt="DJ Virtu" 
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
            />
            <img 
                id="imgsobre" 
                src={palco} 
                alt="Palco" 
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
            />
            <img 
                id="imgsobre" 
                src={paredao} 
                alt="Paredao" 
                onClick={openModal} 
                style={{ cursor: 'pointer' }} 
            />

            {/* Modal */}
            {/* {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img 
                            src={djmoi} 
                            alt="DJ Moi" 
                            style={{ width: '100%', height: 'auto' }} 
                        />
                    </div>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <img 
                            src={barulho} 
                            alt="DJ Moi" 
                            style={{ width: '100%', height: 'auto' }} 
                        />
                    </div>
                </div>
            )} */}

            <div className="loading-circle">
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default Atracoes;
