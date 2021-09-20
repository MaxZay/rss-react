import '../styles/search.css'
import LOUPE from '../assets/loupe.svg'
import { ChangeEvent, FormEvent } from 'react'

interface ISearch {
  getDataLoadingFlag: (flag: boolean) => void
  setSearchData: (value: string) => void
  searchData: string
  pageInfo: any
  setPageInfo: (value: any) => void
}

export const Search: React.FC<ISearch> = (props) => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    props.getDataLoadingFlag(true)
    event.preventDefault()
  }

  return (
    <form className="search-item" onSubmit={submitHandler}>
      <input
        className="search-item__input"
        type="text"
        placeholder="Search"
        value={props.searchData}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          props.setPageInfo({
            ...props.pageInfo,
            page: 1,
          })
          props.setSearchData(event.target.value)
        }}
      ></input>
      <button className="search-item__button" type="submit">
        <img
          className="search-item__loupe"
          src={LOUPE}
          alt="search"
          width="20"
          height="20"
        />
      </button>
    </form>
  )
}
