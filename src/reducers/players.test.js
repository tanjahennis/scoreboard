// src/reducers/players.test.js

import chai, { expect } from 'chai'
import players from './players'

describe('players', () => {
  describe('initial state', () => {
    const initialState = players()
    it('is an empty array', () => {
      expect(initialState).to.eql([])      
    })
  })
})
