import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ResetGame as ResetGameComponent } from './component'
import { GlobalState } from 'life/state/counter'
import { resetGame } from 'life/actions/counter'

function mapDispatchToProps(dispatch: Dispatch<GlobalState>) {
  return {
    resetGame: () => dispatch(resetGame()),
  }
}

export const ResetGame = connect(undefined, mapDispatchToProps)(ResetGameComponent)
