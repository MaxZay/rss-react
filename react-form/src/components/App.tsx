import { Form } from './Form'
import { useState } from 'react'
import { Card } from './Card'
import { FormInfo } from '../classes/formInfo'

export const App = () => {
  const [formData, setFormData] = useState<FormInfo[]>([])

  const handlerSetFormData = (arr: FormInfo[]) => {
    setFormData(arr)
  }

  return (
    <div>
      <Form formData={formData} setFormData={handlerSetFormData} />
      <main>
        {formData.map((item, key) => (
          <Card data={item} key={key} />
        ))}
      </main>
    </div>
  )
}
