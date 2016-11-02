// src/reducers/players.test.js

import chai, { expect } from 'chai'
import deepFreeze from 'deep-freeze-node'
import players from './players'

import { ADD_PLAYER } from '../actions/add-player'

describe('players', () => {
  describe('initial state', () => {
    const initialState = players()
    it('is an empty array', () => {
      expect(initialState).to.eql([])
    })
  })

  describe(ADD_PLAYER, () => {
    const existingPlayer = {
      name: 'Jane',
      points: 4
    }
    const initialState = deepFreeze([ existingPlayer ])
    const newPlayer = {
      name: 'Bram',
      points: 0
    }
    const action = deepFreeze({
      type: ADD_PLAYER,
      payload: newPlayer
    })
    const finalState = [ existingPlayer, newPlayer ]

    it('adds a player', () => {
      expect(players(initialState, action)).to.eql(finalState)
    })
  })
})
