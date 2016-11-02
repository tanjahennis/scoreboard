// src/App.js
import React from 'react'
import Title from './components/Title'
import Scoreboard from './containers/Scoreboard'
import CreatePlayer from './components/CreatePlayer'
import './App.sass'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Title label="Scoreboard" />
        <CreatePlayer />
        <Scoreboard />
      </div>
    )
  }
}

export default App
