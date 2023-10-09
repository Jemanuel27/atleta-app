import React, { useState } from 'react';
import CardAtleta from './Cardatleta';

const PesquisaAtletas = ({ onAddFavorite }) => {
  const [nomeAtleta, setNomeAtleta] = useState('');
  const [atletas, setAtletas] = useState([]);

  const buscarAtletas = async () => {
    try {
      const apiKey = '23a2495a633253850a9ad8999dd626eb7639663230f50f483ed40b33ea5ede3c';
      const apiUrl = `https://apiv3.apifootball.com/?action=get_countries&APIkey=${player_name}`;

      const data = await response.json();
      
      if (Array.isArray(data)) {
        setAtletas(data);
      } else {
        setAtletas([]);
      }
    } catch (error) {
      console.error('Erro ao buscar atletas:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nome do atleta"
        value={nomeAtleta}
        onChange={(e) => setNomeAtleta(e.target.value)}
      />
      <button onClick={buscarAtletas}>Buscar</button>
      <div>
        {Array.isArray(atletas) ? (
          atletas.map((atleta, index) => (
            <CardAtleta
              key={index}
              atleta={atleta}
            />
          ))
        ) : (
          <p>Nenhum atleta encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default PesquisaAtletas;