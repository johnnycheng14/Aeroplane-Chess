import { greenHanger } from '../board'

import DEPLOY_PIECE from './player'
import MOVE_PIECE from './player'
import JUMP_PIECE from './player'
import FLY_PIECE from './player'
import RETURN_PIECE from './player'

const initialState = {
  piece1: {
    position: greenHanger
  },
  piece2: {
    position: greenHanger
  },
  piece3: {
    position: greenHanger
  },
  piece4: {
    position: greenHanger
  },
  undeployed: ['piece1', 'piece2', 'piece3', 'piece4']
}

export default function(state = initialState, action) {
  switch (action.type) {
    case DEPLOY_PIECE + 'green':
      let piece = state.undeployed[0]
      let newState = {
        ...state,
        undeployed: undeployed.slice(1),
      }
      newState[piece] = { position: greenHanger.next }
      return newState
    case MOVE_PIECE + 'green':
      let newState = {
        ...state, 
      }
      let position = newState[action.type].next
      newState[action.type] = { position }
      return newState
    case JUMP_PIECE + 'green':
      let newState = {
        ...state, 
      }
      let position = newState[action.type].jump
      newState[action.type] = { position }
    case FLY_PIECE + 'green':
      let newState = {
        ...state, 
      }
      let position = newState[action.type].flight
      newState[action.type] = { position }
    case RETURN_PIECE + 'green':
      let newState = {
        ...state, 
      }
      let position = greenHanger
      newState[action.type] = { position }
    default:
      return state
  }
}