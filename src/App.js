// src/App.js
import React from 'react'
import Title from './components/Title'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Title label="Scoreboard" />
      </div>
    )
  }
}

export default App
