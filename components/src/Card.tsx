import './styles/Card.css'

interface CardProps {
  name: string
  src: string
  price: string
}

export const Card = (props: CardProps) => {
  return (
    <div className="card-item">
      <img src={props.src} alt={props.name} className="card-item__img" />
      <h4>{props.name}</h4>
      <h4>{props.price}</h4>
    </div>
  )
}
