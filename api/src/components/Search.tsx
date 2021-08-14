import '../styles/search.css'
import LOUPE from '../assets/loupe.svg'
import { ChangeEvent, useState } from 'react'

interface ISearch {
  flagFunc: () => void
  setSearchData: () => void
  searchData: string
}

export const Search: React.FC<ISearch> = (props) => {
  return (
    <div className="search-item">
      <input
        className="search-item__input"
        type="text"
        placeholder="Search"
        value={props.searchData}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          props.setSearchData(event.target.value)
        }}
      ></input>
      <button
        className="search-item__button"
        onClick={() => {
          props.flagFunc(true)
        }}
      >
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
