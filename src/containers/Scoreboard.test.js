// src/containers/Scoreboard.test.js

import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { Scoreboard } from './Scoreboard'
import Player from '../components/Player'

chai.use(chaiEnzyme())

const players = [
  {
    playerId: 4,
    avatar: 'http://cd.sseu.re/matthew-32094823098.png',
    name: 'Matthew',
    points: 0,
  },
  {
    playerId: 3,
    avatar: 'http://cd.sseu.re/miriam-3409830948.png',
    name: 'Miriam',
    points: 0,
  }
]

describe('<Scoreboard />', () => {
  const scoreboard = shallow(<Scoreboard players={ players } />)

  it('has a ul tag', () => {
    expect(scoreboard).to.have.tagName('ul')
  })

  it('has a class name "scoreboard"', () => {
    expect(scoreboard).to.have.className('scoreboard')
  })

  it('renders the players', () => {
    expect(scoreboard).to.have.exactly(2).descendants(Player)
  })
})
