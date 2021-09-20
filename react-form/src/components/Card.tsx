import { FormInfo } from '../classes/formInfo'
import '../styles/Card.css'

interface Props {
  data: FormInfo
}

export const Card = (props: Props) => {
  const { data } = props

  return (
    <div className="card-item">
      <div className="card-item__block">
        <h4>Имя:</h4>
        <h4 className="card-item__result">{data.name}</h4>
      </div>
      <div className="card-item__block">
        <h4>Фамилие:</h4>
        <h4 className="card-item__result">{data.lastName}</h4>
      </div>
      <div className="card-item__block">
        <h4>Дата рождения:</h4>
        <h4 className="card-item__result">{data.date.toDateString()}</h4>
      </div>
      <div className="card-item__block">
        <h4>Пол:</h4>
        <h4 className="card-item__result">{data.sex}</h4>
      </div>
      <div className="card-item__block">
        <h4>Страна отправления:</h4>
        <h4 className="card-item__result">{data.country}</h4>
      </div>
    </div>
  )
}
