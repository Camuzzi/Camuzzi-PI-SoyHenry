import {useDispatch,useSelector} from "react-redux";
import { useEffect,useState } from "react";
import { getGames } from "../../redux/actions";

import SearchBar from '../../components/searchbar/searchbar';
import Cards from '../../components/cards/cards';

import './home.styles.css';

function Home() {

  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);


  //* PAGINATE *\\

  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = [...allGames].slice(
    indexOfFirstGame,
    indexOfLastGame
  );

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);


  const nextPageHandler = () => {
    const totalGames = allGames.length; //103
    const lastPage = Math.ceil(totalGames / gamesPerPage);
    const nextPage = currentPage + 1;

    if (currentPage === lastPage) return;
    setCurrentPage(nextPage);
  };

  const prevPageHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage === 0) return;
    setCurrentPage(prevPage);
  };


  //* END PAGINATE *\\


  return (
    <div className="home">
      <h2 className='home-tile'>Home Title</h2>
      <SearchBar />
      <div>
        <Cards allGames={currentGames} />
      </div>

      <div>
          <button onClick={prevPageHandler}>
            Previous
          </button>
          <span>{currentPage}</span>
          <button onClick={nextPageHandler}>
            Next
          </button>
      </div>    

    </div>
  );
}

export default Home;