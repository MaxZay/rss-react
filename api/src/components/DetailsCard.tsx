import '../styles/detailsCard.css'

export const DetailsCard = (props: any) => {
  console.log(props)

  return (
    <div className="details-item__block">
      {props.details.length !== 0 && (
        <div>
          <h1 className="details-item__title">
            {props.details.length !== 0 && props.details[0].title}
          </h1>
          <div className="details-item__info">
            <img
              className="details-item__img"
              src={props.details[0].urlToImage}
              alt="details"
              width="200"
              height="150"
            />
            <p className="details-item__content">
              {props.details[0].description}
            </p>
            <p className="details-item__content">{props.details[0].content}</p>
            <p className="details-item__content">
              {props.details[0].publishedAt}
            </p>
            <p className="details-item__content">
              {props.details[0].source.name}
            </p>
            <p className="details-item__content">{props.details[0].url}</p>
          </div>
        </div>
      )}
    </div>
  )
}
