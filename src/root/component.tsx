import * as React from 'react'
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { SwapPlayers } from 'life/components/swap-players'
import { SwitchLayout } from 'life/components/switch-layout'
import { ResetGame } from 'life/components/reset'
import { reducer } from 'life/state/counter'
import { Counter } from 'life/components/counter'
import { Pallet } from 'life/util/color'

enum Orientation {
  WIDE = 1,
  TALL,
}


export interface PublicProps {}

export interface State {
  layout: Orientation
}

const store = createStore(reducer)

export class Root extends React.Component<PublicProps, State> {
  state = {
    layout: Orientation.TALL,
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.updateLayout)
    this.updateLayout()
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateLayout)
  }

  updateLayout = () => {
    const { height, width } = Dimensions.get('window')
    this.setState({ layout: height > width ? Orientation.TALL : Orientation.WIDE })
  }

  render() {
    const styles = getStyles(this.state.layout)
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.root}>
          <View style={styles.container}>
            <Counter />
          </View>
          <View style={styles.footer}>
            <ResetGame />
            <SwapPlayers />
            <SwitchLayout />
          </View>
        </SafeAreaView>
      </Provider>
    )
  }
}

function getStyles(layout: Orientation) {
  return StyleSheet.create({
    root: {
      backgroundColor: Pallet.black,
      flexGrow: 1,
      flexDirection: layout === Orientation.WIDE ? 'row' : 'column',
    },
    footer: {
      backgroundColor: Pallet.white,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: layout === Orientation.WIDE ? 'column' : 'row',
    },
    container: {
      display: 'flex',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexGrow: 1,
    },
  })
}