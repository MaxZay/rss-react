import './styles/Buttons.css'
import BOOKMARK from './assets/bookmark.svg'
import BASKET from './assets/basket.svg'
import HEARD from './assets/heard.svg'

export const Buttons = () => {
  return (
    <div className="buttons-item">
      <button className="buttons-item__button">
        <img src={BOOKMARK} alt="bookmark" width="13" height="13" />
      </button>
      <button className="buttons-item__button">
        <img src={BASKET} alt="bookmark" width="13" height="13" />
      </button>
      <button className="buttons-item__button">
        <img src={HEARD} alt="bookmark" width="13" height="13" />
      </button>
    </div>
  )
}
