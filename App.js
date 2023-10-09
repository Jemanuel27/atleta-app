function searchPlayer() {
  const apiKey = "23a2495a633253850a9ad8999dd626eb7639663230f50f483ed40b33ea5ede3c";
  const playerName = document.getElementById("playerName").value;
  
  const apiUrl = `https://apiv2.apifootball.com/?action=get_players&APIkey=${apiKey}&player_name=${playerName}`;
  
  fetch(apiUrl)
      .then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error("Erro ao fazer a solicitação à API.");
      })
      .then(data => {
          const playerInfo = document.getElementById("playerInfo");
          
          // Processar os dados da resposta aqui
          if (data && data.length > 0) {
              const player = data[0];
              const playerName = player.player_name;
              const playerAge = player.player_age;
              const playerTeam = player.team_name;
              const playerGoals = player.player_goals;
              const playerAssists = player.player_assists;
              const playerRating = player.player_rating;
              const playerInjured = player.player_injured;
              const playerImage = player.player_image;
              
              // Atualizar os elementos HTML com as informações do jogador
              document.getElementById("playerImage").src = playerImage;
              document.getElementById("playerNameText").textContent = `Nome do jogador: ${playerName}`;
              document.getElementById("playerAge").textContent = `Idade: ${playerAge}`;
              document.getElementById("playerTeam").textContent = `Time: ${playerTeam}`;
              document.getElementById("playerGoals").textContent = `Gols: ${playerGoals}`;
              document.getElementById("playerAssists").textContent = `Assistências: ${playerAssists}`;
              document.getElementById("playerRating").textContent = `Classificação: ${playerRating}`;
              document.getElementById("playerInjured").textContent = `Machucado: ${playerInjured}`;
          } else {
              playerInfo.innerHTML = "Nenhum jogador encontrado com o nome especificado.";
          }
      })
      .catch(error => {
          console.error(error);
      });
}
