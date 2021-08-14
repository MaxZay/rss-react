import '../styles/card.css'

interface IData {
  data: any
}

export const Card: React.FC<IData> = (props) => {
  return (
    <div className="card-item">
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
        <h3>{props.data.title}</h3>
      </div>
    </div>
  )
}
