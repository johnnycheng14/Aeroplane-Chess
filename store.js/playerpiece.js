const DEPLOY_PIECE = 'DEPLOY_PIECE'
const MOVE_PIECE = 'MOVE_PIECE'
const JUMP_PIECE = 'JUMP_PIECE'
const FLY_PIECE = 'FLY_PIECE'
const RETURN_PIECE = 'RETURN_PIECE'

const initialState = {
  piece1: {
    deployed: false,
    position: ['home', 0]
  },
  piece2: {
    deployed: false,
    position: ['home', 1]
  },
  piece3: {
    deployed: false,
    position: ['home', 2]
  },
  piece4: {
    deployed: false,
    position: ['home', 3]
  },
}