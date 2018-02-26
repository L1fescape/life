import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Counter as CounterComponent } from './component'
import { GlobalState } from 'life/state/counter'
import { increment, decrement, changeName } from 'life/actions/counter'

function mapStateToProps(state: GlobalState) {
  return {
    counters: state.counters,
    layout: state.layout,
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalState>) {
  return {
    increment: (index: number) => dispatch(increment(index)),
    decrement: (index: number) => dispatch(decrement(index)),
    changeName: (index: number, name: string) => dispatch(changeName(index, name)),
  }
}

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
