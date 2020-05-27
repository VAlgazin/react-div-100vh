import React from 'react'
import {render} from 'react-dom'
import { useRealViewportHeight } from 'react-div-100vh'

const App = () => {
  const rvh = useRealViewportHeight()
  return <div>{rvh}</div>
}

render(<App />, document.getElementById('app'))