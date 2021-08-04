import React, { useState, useEffect } from 'react'
import Services from './services/BackendComm.js'

const App = () => {
  const [ read, setRead ] = useState('')
  
  useEffect(() => {
    Services.getAll()
      .then(response => {
	setRead(response)
      })
  })

  return (
    <>
      <div>Hello from React</div>
      <div>{read}</div>
    </>
  )
}

export default App;
