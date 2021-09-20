import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react'
import { FormInfo } from '../classes/formInfo'
import '../styles/From.css'
import { getBirthDateStatus, getNameStatus } from '../classes/isValid'

interface IForm {
  formData: FormInfo[]
  setFormData: (arr: FormInfo[]) => void
}

export const Form = (props: IForm) => {
  const { formData, setFormData } = props
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
    Object.entries(validateStatus).map((key, value) => {
      if (!value) {
        return false
      }
    })
    return true
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    if (checkValidateStatus()) {
      const sex = sexFemaleValue ? 'Мужской' : 'Женский'

      setFormData([
        ...formData,
        {
          name: nameValue,
          lastName: lastNameValue,
          date: new Date(birthValue),
          sex: sex,
          country: selectValue,
          agree: checkboxValue,
        },
      ])
      clearForm()
    }
  }

  const handleValueChange = (
    event: ChangeEvent<HTMLInputElement>,
    str: string
  ) => {
    if (str === 'name') {
      setValidateStatus({
        ...validateStatus,
        name: getNameStatus(event.target.value),
      })
      setNameValue(event.target.value)
    } else {
      setValidateStatus({
        ...validateStatus,
        lastName: getNameStatus(event.target.value),
      })
      setLastNameValue(event.target.value)
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
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleValueChange(event, 'name')
          }
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
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleValueChange(event, 'lastName')
          }
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
            if (event.target.value.length === 0) {
              setValidateStatus({
                ...validateStatus,
                birthName: false,
              })
            } else {
              setValidateStatus({
                ...validateStatus,
                birthName: getBirthDateStatus(Date.parse(event.target.value)),
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
            setFemaleSexValue(event.target.checked)
            setMaleSexValue(false)
          }}
        />
      </div>
      <select
        name="select"
        className="form-item__input-select"
        value={selectValue}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          setSelectValue(event.target.value)
        }}
        onBlur={(event: FocusEvent<HTMLSelectElement>) => {
          console.log(event.target)
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
