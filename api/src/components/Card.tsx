import { Link } from 'react-router-dom'
import '../styles/card.css'

interface IData {
  data: any
  index: number
}

export const Card: React.FC<IData> = (props) => {
  const date = Date.parse(props.data.publishedAt)
  const temp = new Date(date)
  const res = `${temp.getDate()}-${temp.getMonth()}-${temp.getFullYear()}`

  return (
    <div className="card-item" id={`${props.index}`}>
      <div>
        <img
          className="card-item__img"
          src={props.data.urlToImage}
          alt="news_image"
          width="200"
          height="120"
        />
      </div>
      <div className="card-item__block">
        <p className="card-item__title">{props.data.title}</p>
        <p className="card-item__description">{props.data.description}</p>
        <p className="card-item__date">{res}</p>
        <p className="card-item__author">{props.data.author}</p>
        <Link className="card-item__details" to={`/details/:${props.index}`}>
          Details
        </Link>
      </div>
    </div>
  )
}
