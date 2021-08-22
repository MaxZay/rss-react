import { useParams } from 'react-router'
import { DetailsCard } from './DetailsCard'

export const Details = (props) => {
  const { title } = useParams()
  const src = Number.parseInt(title.substr(1))

  return (
    <div>
      <DetailsCard data={props.news[src]} />
    </div>
  )
}
