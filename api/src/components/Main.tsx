import { Card } from './Card'
import '../styles/main.css'
import { ChangeEvent } from 'react'

interface IMain {
  flagFunc: (flag: boolean) => void
  setSortParam: (str: string) => void
  newsData: any
  radioFlag: any
  setRadioFlag: (param: any) => void
}

export const Main: React.FC<IMain> = (props: IMain) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setSortParam(event.target.value)
    props.flagFunc(true)
  }

  return (
    <div>
      {props.newsData.length !== 0 && (
        <div className="main-item__block">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="radio"
              name="sort"
              value="title"
              id="title"
              checked={props.radioFlag.titleFlag}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event.target.checked) {
                  props.setRadioFlag({
                    titleFlag: true,
                  })
                  changeHandler(event)
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="radio"
              name="sort"
              value="date"
              id="date"
              checked={props.radioFlag.dateFlag}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event.target.checked) {
                  props.setRadioFlag({
                    dateFlag: true,
                  })
                  changeHandler(event)
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="popularity">Popularity</label>
            <input
              type="radio"
              name="sort"
              value="popularity"
              id="popularity"
              checked={props.radioFlag.popularityFlag}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event.target.checked) {
                  props.setRadioFlag({
                    popularityFlag: true,
                  })
                  changeHandler(event)
                }
              }}
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
