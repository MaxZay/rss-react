import { useEffect, useState } from 'react'
import newsInfo from '../classes/newsInfo'

interface IMain {
  newsData: any
}

export const Main = (props) => {
  return (
    <div>
      {props.newsData && props.newsData.map((item) => <h1>{item.title}</h1>)}
    </div>
  )
}
