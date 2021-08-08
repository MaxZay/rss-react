class FormInfo {
  public name: string
  public lastName: string
  public date: Date
  public sex: string
  public country: string
  public agree: boolean

  constructor(
    _name: string,
    _lastName: string,
    _date: Date,
    _sex: string,
    _country: string,
    _agree: boolean
  ) {
    this.name = _name
    this.lastName = _lastName
    this.date = _date
    this.sex = _sex
    this.country = _country
    this.agree = _agree
  }
}

export default FormInfo
