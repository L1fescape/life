export const COUNTER_INC = 'COUNTER_INC'
export function increment(index: number) {
  return {
    type: COUNTER_INC,
    payload: index,
  }
}

export const COUNTER_DEC = 'COUNTER_DEC'
export function decrement(index: number) {
  return {
    type: COUNTER_DEC,
    payload: index,
  }
}

export const COUNTER_CHANGE_NAME = 'COUNTER_CHANGE_NAME'
export function changeName(index: number, name: string) {
  return {
    type: COUNTER_CHANGE_NAME,
    payload: {
      index,
      name,
    },
  }
}

export const COUNTER_SWAP_PLAYERS = 'COUNTER_SWAP_PLAYERS'
export function swapPlayers() {
  return {
    type: COUNTER_SWAP_PLAYERS,
  }
}

export const SWITCH_LAYOUT = 'SWITCH_LAYOUT'
export function switchLayout() {
  return {
    type: SWITCH_LAYOUT,
  }
}

export const RESET_GAME = 'RESET_GAME'
export function resetGame() {
  return {
    type: RESET_GAME,
  }
}