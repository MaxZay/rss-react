import { Form } from './Form'
import { useState } from 'react'
import { Card } from './Card'

export const App = () => {
  const [formData, setFormData] = useState([])

  return (
    <div>
      <Form state={setFormData} />
      <main>
        {formData.map((item, key) => (
          <Card item={item} key={key} />
        ))}
      </main>
    </div>
  )
}
