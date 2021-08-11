import { ChangeEvent, FocusEventHandler, FormEvent, useState } from 'react'
import FormInfo from '../classes/formInfo'
import '../styles/From.css'
import IsValid from '../classes/isValid'

interface IForm {
  setFormData: (state: FormInfo[]) => void
}

let submit = false

export const Form: React.FC<IForm> = (setFormData) => {
  const [nameValue, setNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [birthValue, setBirthValue] = useState('')
  const [sexMaleValue, setMaleSexValue] = useState(true)
  const [sexFemaleValue, setFemaleSexValue] = useState(false)
  const [selectValue, setSelectValue] = useState('Россия')
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [validateStatus, setValidateStatus] = useState({
    name: false,
    lastName: false,
    birthName: false,
    sex: true,
    select: true,
    checkBox: false,
  })

  const clearForm = () => {
    setValidateStatus({
      name: false,
      lastName: false,
      birthName: false,
      sex: true,
      select: true,
      checkBox: false,
    })
    setNameValue('')
    setLastNameValue('')
    setBirthValue('')
    setMaleSexValue(true)
    setFemaleSexValue(false)
    setSelectValue('Россия')
    setCheckboxValue(false)
  }

  const checkValidateStatus = () => {
    console.log(validateStatus)

    for (const prop in validateStatus) {
      if (!validateStatus[prop]) {
        return false
      }
    }
    return true
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    if (checkValidateStatus()) {
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
      clearForm()
    }
  }

  return (
    <form className="form-item" onSubmit={submitHandler}>
      <div className="form-item__block">
        <input
          placeholder="Имя"
          className={
            validateStatus.name
              ? 'form-item__input'
              : 'form-item__input form-item__error-name'
          }
          value={nameValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            submit = true
            setValidateStatus({
              ...validateStatus,
              name: IsValid.getNameStatus(event.target.value),
            })
            setNameValue(event.target.value)
          }}
        />
        {!validateStatus.name && (
          <p className="form-item__error-name-p">неверные данные</p>
        )}
      </div>
      <div className="form-item__block">
        <input
          placeholder="Фамилие"
          className={
            validateStatus.lastName
              ? 'form-item__input'
              : 'form-item__input form-item__error-name'
          }
          value={lastNameValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            submit = true
            setValidateStatus({
              ...validateStatus,
              lastName: IsValid.getNameStatus(event.target.value),
            })
            setLastNameValue(event.target.value)
          }}
        />
        {!validateStatus.lastName && (
          <p className="form-item__error-name-p">неверные данные</p>
        )}
      </div>
      <div className="form-item__block">
        <label htmlFor="date">Дата рождения: </label>
        <input
          name="date"
          className={
            validateStatus.birthName
              ? 'form-item__input-date'
              : 'form-item__input-date form-item__error-name'
          }
          type="date"
          value={birthValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            submit = true
            if (event.target.value.length === 0) {
              setValidateStatus({
                ...validateStatus,
                birthName: false,
              })
            } else {
              setValidateStatus({
                ...validateStatus,
                birthName: IsValid.getBirthDateStatus(
                  Date.parse(event.target.value)
                ),
              })
            }
            setBirthValue(event.target.value)
          }}
        />
        {!validateStatus.birthName && (
          <p className="form-item__error-name-p">неверные данные</p>
        )}
      </div>
      <div className="form-item__input-gender">
        <label htmlFor="gender">Мужской</label>
        <input
          name="gender"
          type="radio"
          value="male"
          checked={sexMaleValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            submit = true
            setMaleSexValue(event.target.checked)
            setFemaleSexValue(false)
          }}
        ></input>
        <label htmlFor="gender">Женский</label>
        <input
          name="gender"
          type="radio"
          value="female"
          checked={sexFemaleValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            submit = true
            setFemaleSexValue(event.target.checked)
            setMaleSexValue(false)
          }}
        />
      </div>
      <select
        name="select"
        className="form-item__input-select"
        value={selectValue}
        onChange={(event: FocusEventHandler<HTMLInputElement>) => {
          submit = true
          setSelectValue(event.target.value)
        }}
      >
        <option value="Россия">Россия</option>
        <option value="Беларусь">Беларусь</option>
        <option value="Украина">Украина</option>
        <option value="Польша">Польша</option>
      </select>
      <div className="form-item__block">
        <label htmlFor="checkbox" className="form-item__label-for-checkbox">
          Согласен на обработку данных
        </label>
        <input
          name="checkbox"
          type="checkbox"
          className="form-item__input-checkbox"
          checked={checkboxValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            submit = true
            setValidateStatus({
              ...validateStatus,
              checkBox: event.target.checked,
            })
            setCheckboxValue(event.target.checked)
          }}
        />
        {!validateStatus.checkBox && (
          <p className="form-item__error-name-p">
            необходимо дать разрешение на обработку формы
          </p>
        )}
      </div>
      <button>Отправить</button>
    </form>
  )
}
