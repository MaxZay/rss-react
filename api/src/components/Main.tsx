import { Card } from './Card'

interface IMain {
  newsData: any
}

export const Main: React.FC<IMain> = (props: IMain) => {
  return (
    <div>
      {props.newsData &&
        props.newsData.map((item: any, key: any) => (
          <Card data={item} key={key} />
        ))}
    </div>
  )
}
