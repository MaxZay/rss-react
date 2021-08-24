import '../styles/detailsCard.css'

export const DetailsCard = (props) => {
  return (
    <div className="details-item__block">
      {props.details.length !== 0 && (
        <div>
          <h1 className="details-item__title">
            {props.details.length !== 0 && props.details[0].title}
          </h1>
          <div className="details-item__info">
            {props.details.length !== 0 && (
              <img
                className="details-item__img"
                src={props.details[0].urlToImage}
                alt="details"
                width="200"
                height="150"
              />
            )}
            {props.details.length !== 0 && (
              <p className="details-item__content">
                {props.details[0].description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
