class Book {
  public src: string

  public name: string

  public price: string

  public id: number

  constructor(_src: string, _name: string, _price: string, _id: number) {
    this.src = _src
    this.name = _name
    this.price = _price
    this.id = _id
  }
}

export default Book
