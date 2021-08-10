import { ChangeEvent, FocusEventHandler, FormEvent, useState } from 'react'
import FormInfo from '../classes/formInfo'
import '../styles/From.css'

interface IForm {
  setFormData: (state: FormInfo[]) => void
}

export const Form: React.FC<IForm> = (setFormData) => {
  const [nameValue, setNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [birthValue, setBirthValue] = useState('')
  const [sexMaleValue, setMaleSexValue] = useState(false)
  const [sexFemaleValue, setFemaleSexValue] = useState(false)
  const [selectValue, setSelectValue] = useState('Россия')
  const [checkboxValue, setCheckboxValue] = useState(false)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    setFormData.state((s) => [
      ...s,
      {
        nameValue,
        lastNameValue,
        birthValue,
        sexMaleValue,
        sexFemaleValue,
        selectValue,
        checkboxValue,
      },
    ])
    setNameValue('')
    setLastNameValue('')
    setBirthValue('')
    setMaleSexValue(false)
    setFemaleSexValue(false)
    setSelectValue('Россия')
    setCheckboxValue(false)
  }

  return (
    <form className="form-item" onSubmit={submitHandler}>
      <input
        placeholder="Имя"
        className="form-item__input"
        value={nameValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setNameValue(event.target.value)
        }
      />
      <input
        placeholder="Фамилие"
        className="form-item__input"
        value={lastNameValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setLastNameValue(event.target.value)
        }
      />
      <div>
        <label htmlFor="date">Дата рождения: </label>
        <input
          name="date"
          className="form-item__input-date"
          type="date"
          value={birthValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setBirthValue(event.target.value)
          }
        />
      </div>
      <div className="form-item__input-gender">
        <label htmlFor="gender">Мужской</label>
        <input
          name="gender"
          type="radio"
          value="male"
          checked={sexMaleValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setMaleSexValue(event.target.checked)
          }
        ></input>
        <label htmlFor="gender">Женский</label>
        <input
          name="gender"
          type="radio"
          value="female"
          checked={sexFemaleValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFemaleSexValue(event.target.checked)
          }
        />
      </div>
      <select
        name="select"
        className="form-item__input-select"
        value={selectValue}
        onChange={(event: FocusEventHandler<HTMLInputElement>) =>
          setSelectValue(event.target.value)
        }
      >
        <option value="Россия">Россия</option>
        <option value="Беларусь">Беларусь</option>
        <option value="Украина">Украина</option>
        <option value="Польша">Польша</option>
      </select>
      <div className="form-item__block-checkbox">
        <label htmlFor="checkbox" className="form-item__label-for-checkbox">
          Согласен на обработку данных
        </label>
        <input
          name="checkbox"
          type="checkbox"
          className="form-item__input-checkbox"
          checked={checkboxValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setCheckboxValue(event.target.checked)
          }
        />
      </div>
      <button>Отправить</button>
    </form>
  )
}
