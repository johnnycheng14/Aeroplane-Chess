export const DEPLOY_PIECE = 'DEPLOY_PIECE'
export const MOVE_PIECE = 'MOVE_PIECE'
export const JUMP_PIECE = 'JUMP_PIECE'
export const FLY_PIECE = 'FLY_PIECE'
export const RETURN_PIECE = 'RETURN_PIECE'

export const deployPiece = () => ({
  type: DEPLOY_PIECE
})

export const movePiece = piece => ({
  type: MOVE_PIECE,
  piece
})

export const flyPiece = piece => ({
  type: FLY_PIECE,
  piece
})

export const returnPiece = piece => ({
  type: RETURN_PIECE,
  piece
})
