import React from 'react'
import ReactDOM from 'react-dom'

export default function App(): JSX.Element {
  return (
      <h1>Rendered to the page :)</h1>
  )
}

const rootId = document.getElementById('root');

ReactDOM.render(<App/>, rootId)