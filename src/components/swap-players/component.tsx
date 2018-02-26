import * as React from 'react'
import { TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export interface PublicProps {
  counters: number
  swapPlayers: any
}

export interface State {}

export const SwapPlayers = (props: PublicProps) => {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor='#f6f5f0'
      disabled={props.counters > 2}
      onPress={() => props.swapPlayers()}>
      <Icon
        size={30}
        name='exchange' />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})