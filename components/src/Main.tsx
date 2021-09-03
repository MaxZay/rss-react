import './styles/Main.css'
import { Card } from './Card'
import Book from './classes/Book'
import { data } from './data'

export const Main = () => {
  return (
    <div className="cards-main">
      {data.map((book) => (
        <Card
          key={book.id}
          src={book.src}
          name={book.name}
          price={book.price}
        />
      ))}
    </div>
  )
}
