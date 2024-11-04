import React, { useEffect, useState } from 'react';
import supabase from '../../supabaseclient';

function Teste() {
    const [aprovados, setAprovados] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('aprovados')
                .select('*');

            if (error) {
                console.error("Erro ao buscar dados:", error);
            } else {
                setAprovados(data);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Lista de Aprovados</h1>
            <ul>
                {aprovados.map((aprovado) => (
                    <li key={aprovado.id}>
                        {JSON.stringify(aprovado)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Teste;
