export const DetailsCard = (props) => {
  return (
    <div>
      <h1>{props.details.length !== 0 && props.details[0].title}</h1>
    </div>
  )
}
