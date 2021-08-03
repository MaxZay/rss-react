import './styles/Search.css'
import LOUPE from './assets/loupe.svg'

export const Search = () => {
  return (
    <div className="search-item">
      <input
        className="search-item__input"
        type="text"
        placeholder="Search"
      ></input>
      <button className="search-item__button">
        <img
          className="search-item__loupe"
          src={LOUPE}
          alt="search"
          width="20"
          height="20"
        />
      </button>
    </div>
  )
}
