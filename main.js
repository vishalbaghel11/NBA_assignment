
const createPlayerCard = (player) => {
  const playerCard = document.createElement('div');
  playerCard.classList.add('player-card');

  playerCard.innerHTML = `
    <img src="${player.image}" alt="${player.name}" class="player-image">
    <h2 class="player-name">${player.name}</h2>
    <p class="player-team">Team: ${player.team}</p>
    <p class="player-position">Position: ${player.position}</p>
    <div class="player-stats">
      <p>PTS: ${player.stats.pointsPerGame}</p>
      <p>AST: ${player.stats.assistsPerGame}</p>
      <p>REB: ${player.stats.reboundsPerGame}</p>
    </div>
  `;

  return playerCard;
};


const renderPlayers = (players) => {
  const playerListContainer = document.getElementById('player-list');
  playerListContainer.innerHTML = ''; 
  
  
  players.forEach(player => {
    const card = createPlayerCard(player);
    playerListContainer.appendChild(card);
  });
};


let allPlayers = [];


fetch('./data/players.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(players => {
    allPlayers = players; 
    renderPlayers(allPlayers); 
  })
  .catch(error => {
    console.error('There was a problem fetching the player data:', error);
  });


const searchBar = document.getElementById('search-bar');


searchBar.addEventListener('input', (e) => {
  const searchQuery = e.target.value.toLowerCase(); 
  
  const filteredPlayers = allPlayers.filter(player => {
    
    return player.name.toLowerCase().includes(searchQuery);
  });

  renderPlayers(filteredPlayers); 
});