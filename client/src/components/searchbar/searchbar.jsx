import './searchbar.styles.css';

function SearchBar() {
  return (
    <div className='sbStyle'>
      <form>
        <input placeholder='Search...'/>
        <button>GO</button>
      </form>
    </div>
  );
}

export default SearchBar;