import { redHanger } from '../board'

import DEPLOY_PIECE from './player'
import MOVE_PIECE from './player'
import JUMP_PIECE from './player'
import FLY_PIECE from './player'
import RETURN_PIECE from './player'

const initialState = {
  piece1: {
    deployed: false,
    position: redHanger
  },
  piece2: {
    deployed: false,
    position: redHanger
  },
  piece3: {
    deployed: false,
    position: redHanger
  },
  piece4: {
    deployed: false,
    position: redHanger
  },
}

