import { AnyAction } from 'redux'
import { COUNTER_INC, COUNTER_DEC, COUNTER_CHANGE_NAME, COUNTER_SWAP_PLAYERS, SWITCH_LAYOUT, RESET_GAME } from 'life/actions/counter'

export enum ButtonLayout {
  Outer = 1,
  Inner,
}

export interface Counter {
  value: number
  name: string
}

export interface GlobalState {
  counters: Counter[]
  layout: ButtonLayout
}

export const intialState = {
  layout: ButtonLayout.Inner,
  counters: [{
    value: 20,
    name: 'Me',
  }, {
    value: 20,
    name: 'Opponent',
  }],
}

export function reducer(state = intialState, action: AnyAction) {
  const handlers: {[key: string]: (data: any) => GlobalState} = {
    [COUNTER_INC]: (index: number) => {
      return {
        ...state,
        counters: [
          ...state.counters.slice(0, index),
          {
            ...state.counters[index],
            value: state.counters[index].value + 1,
          },
          ...state.counters.slice(index + 1),
        ],
      }
    },
    [COUNTER_DEC]: (index: number) => {
      return {
        ...state,
        counters: [
          ...state.counters.slice(0, index),
          {
            ...state.counters[index],
            value: state.counters[index].value - 1,
          },
          ...state.counters.slice(index + 1),
        ],
      }
    },
    [COUNTER_CHANGE_NAME]: ({index, name}: {index: number, name: string}) => {
      return {
        ...state,
        counters: [
          ...state.counters.slice(0, index),
          {
            ...state.counters[index],
            name,
          },
          ...state.counters.slice(index + 1),
        ],
      }
    },
    [COUNTER_SWAP_PLAYERS]: () => {
      return {
        ...state,
        counters: [
          state.counters[1],
          state.counters[0],
          ...state.counters.slice(2),
        ],
      }
    },
    [SWITCH_LAYOUT]: () => {
      return {
        ...state,
        layout: state.layout === ButtonLayout.Inner ? ButtonLayout.Outer : ButtonLayout.Inner,
      }
    },
    [RESET_GAME]: () => {
      return {
        ...state,
        ...intialState,
      }
    },
  }

  if (handlers[action.type]) {
    return handlers[action.type](action.payload)
  }

  return state
}