// src/reducers/player-profile-id.test.js

import chai, { expect } from 'chai'
import deepFreeze from 'deep-freeze-node'
import playerProfileId from './player-profile-id'

import { SELECT_PLAYER } from '../actions/select-player-profile'

describe('playerProfileId', () => {
  describe('initial state', () => {
    const initialState = playerProfileId()
    it('is null', () => {
      expect(initialState).to.eql(null)
    })
  })

  describe(SELECT_PLAYER, () => {
    const initialState = deepFreeze(9)

    const action = deepFreeze({
      type: SELECT_PLAYER,
      payload: '3'
    })

    const finalState = 3

    it('sets the player id', () => {
      expect(playerProfileId(initialState, action)).to.eql(finalState)
    })
  })
})
