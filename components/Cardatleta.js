import React from 'react';

const Cardatleta = ({ atleta }) => {
  return (
    <div className="card-atleta">
      <img src={atleta.imagem} alt={atleta.nome} />
      <h3>{atleta.nome}</h3>
      <p>Idade: {atleta.idade}</p>
      <p>Posição: {atleta.posicao}</p>
      {/* Adicione outras informações do atleta, se necessário */}
    </div>
  );
};

export default Cardatleta;
