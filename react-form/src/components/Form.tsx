import FormInfo from '../classes/formInfo'
import '../styles/From.css'

export const Form = (setFormDate) => {
  const submitHandler = (event: any) => {
    event.preventDefault()
    setFormData((arr): FormInfo[] => arr.append(new FormInfo()))
  }

  return (
    <form className="form-item" onSubmit={submitHandler}>
      <input placeholder="Имя" className="form-item__input" />
      <input placeholder="Фамилие" className="form-item__input" />
      <div>
        <label htmlFor="date">Дата рождения: </label>
        <input name="date" className="form-item__input-date" type="date" />
      </div>
      <div className="form-item__input-gender">
        <label htmlFor="gender">Мужской</label>
        <input name="gender" type="radio" value="male"></input>
        <label htmlFor="gender">Женский</label>
        <input name="gender" type="radio" value="female"></input>
      </div>
      <select name="select" className="form-item__input-select">
        <option selected value="none">
          Выберите страну отправления
        </option>
        <option value="russia">Россия</option>
        <option value="belarus">Беларусь</option>
        <option value="ukraine">Украина</option>
        <option value="poland">Польша</option>
      </select>
      <div className="form-item__block-checkbox">
        <label htmlFor="checkbox" className="form-item__label-for-checkbox">
          Согласен на обработку данных
        </label>
        <input
          name="checkbox"
          type="checkbox"
          className="form-item__input-checkbox"
        />
      </div>
      <button>Отправить</button>
    </form>
  )
}
