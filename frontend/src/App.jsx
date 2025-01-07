import { useState } from 'react'
import Hero from './components/Hero'
import BookForm from './components/Bookform'

function App() {
  const [formState, setFormState] = useState(false)

  return (
    <section>
      <Hero setFormState={setFormState}/>
      <BookForm formState={formState} setFormState={setFormState} />
    </section>
  )
}

export default App
