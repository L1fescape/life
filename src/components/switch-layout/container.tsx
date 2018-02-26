import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { SwitchLayout as SwitchLayoutComponent } from './component'
import { GlobalState } from 'life/state/counter'
import { switchLayout } from 'life/actions/counter'

function mapStateToProps(state: GlobalState) {
  return {
    layout: state.layout,
  }
}

function mapDispatchToProps(dispatch: Dispatch<GlobalState>) {
  return {
    switchLayout: () => dispatch(switchLayout()),
  }
}

export const SwitchLayout = connect(mapStateToProps, mapDispatchToProps)(SwitchLayoutComponent)
