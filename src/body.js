import players from "./mockdata";
const Body = () => {
  return (
    <div className="players-list">
      {players.map(player => (
        <div key={player.id} className="player-card">
          <img src={player.image} alt={player.name} />
          <h2>{player.name}</h2>
          <h4>{player.team}</h4>
          <span>Position : {player.position}</span>
        </div>
      ))}
    </div>
  );
};
export default Body;  