import React, { useEffect, useState } from 'react';
import './Atracoes.css';
import ctc from './ctc.png';
import img from './img.png';
import paredao from './paredao.png';
import kury from './djkury2.png'
import kurydois from './djkuri.png';
import palco from './palco2.png';
import virtu from './virtu.png';


function Atracoes() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 1 : 0));
        }, 100);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="atracoes">
             <br />
        <h1 id='title'>
        JEM BREVE</h1>
            <br/>
            <div className="loading-circle">
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default Atracoes;
