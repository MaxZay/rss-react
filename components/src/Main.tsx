import './styles/Main.css'
import { Card } from './Card'
import Book from './classes/Book'
//https://img3.labirint.ru/rc/58ce401f695e326171589cd76e1f3b6d/220x340/books74/732951/cover.png?1594124754
const data = [
  new Book(
    'http://loveread.ec/img/photo_books/25721.jpg',
    'First player ready',
    '37$',
    1
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
  new Book(
    'https://books.google.by/books/publisher/content?id=zTsnDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71markcggUmrGXyl0wipF04E0qslv5louTXv58_kOFLM7s9QqsOm0WXRMtlaEOZC9mZIi6MpLqO19kaNLEbYO8OhsyBEFzuGZL8t0jMx-y2xz50CImhwSYAZm89cTlC9qQTITcg',
    'The Last Wish',
    '7$',
    2
  ),
]

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
