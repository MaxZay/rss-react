import FormInfo from '../classes/formInfo'
import '../styles/Card.css'

export const Card = (props) => {
  const sex = props.item.sexMaleValue ? 'Мужской' : 'Женский'

  return (
    <div className="card-item">
      <div className="card-item__block">
        <h4>Имя:</h4>
        <h4 className="card-item__result">{props.item.nameValue}</h4>
      </div>
      <div className="card-item__block">
        <h4>Фамилие:</h4>
        <h4 className="card-item__result">{props.item.lastNameValue}</h4>
      </div>
      <div className="card-item__block">
        <h4>Дата рождения:</h4>
        <h4 className="card-item__result">{props.item.birthValue}</h4>
      </div>
      <div className="card-item__block">
        <h4>Пол:</h4>
        <h4 className="card-item__result">{sex}</h4>
      </div>
      <div className="card-item__block">
        <h4>Страна отправления:</h4>
        <h4 className="card-item__result">{props.item.selectValue}</h4>
      </div>
    </div>
  )
}
