import { Card } from './Card'
import '../styles/main.css'
import { ChangeEvent } from 'react'

interface IMain {
  flagFunc: (flag: boolean) => void
  setSortParam: (str: string) => void
  newsData: any
}

export const Main: React.FC<IMain> = (props: IMain) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      props.setSortParam(event.target.value)
      props.flagFunc(true)
    }
  }

  return (
    <div>
      {props.newsData.length !== 0 && (
        <div className="main-item__block">
          <div>
            <label htmlFor="Title">Title</label>
            <input
              type="radio"
              name="sort"
              value="title"
              id="author"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="radio"
              name="sort"
              value="date"
              id="date"
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="popularity">Popularity</label>
            <input
              type="radio"
              name="sort"
              value="popularity"
              id="popularity"
              onChange={changeHandler}
            />
          </div>
        </div>
      )}
      {props.newsData &&
        props.newsData.map((item: any, key: any) => (
          <Card data={item} key={key} />
        ))}
    </div>
  )
}
