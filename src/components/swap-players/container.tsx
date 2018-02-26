import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { SwapPlayers as SwapPlayersComponent } from './component'
import { GlobalState } from 'life/state/counter'
import { swapPlayers } from 'life/actions/counter'

function mapStateToProps(state: GlobalState) {
  return {
    counters: state.counters.length,
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalState>) {
  return {
    swapPlayers: () => dispatch(swapPlayers()),
  }
}

export const SwapPlayers = connect(mapStateToProps, mapDispatchToProps)(SwapPlayersComponent)
