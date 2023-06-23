import './card.styles.css';

function Card({game}) {
    const {id,name,image,genres} = game;


    return (
      <div className='all-cards'>
        <h2>{name}</h2>
        <img className="card-img" src={image} alt="videogame image"/>
        {/* <h3>{genres?.map((genre,key)=>{
          return <h5 key={key}>{genre}</h5>
        })}</h3> */}
      </div>
    );
  }
  
  export default Card;