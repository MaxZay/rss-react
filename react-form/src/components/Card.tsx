import FormInfo from '../classes/formInfo'

export const Card = (props: FormInfo) => {
  return (
    <div>
      <div>
        <h4>Имя: </h4>
        <h4>{props.name}</h4>
      </div>
    </div>
  )
}
