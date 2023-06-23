import './cards.styles.css';
import Card from "../card/card";

function Cards({allGames}) {

  const gamesList = allGames;

    return (
      <div className="card-style" >
        {gamesList?.map((game) => (
          <Card game={game}/>
        ))}
      </div>
    );
  }
  
  export default Cards;