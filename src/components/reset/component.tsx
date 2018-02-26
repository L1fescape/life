import * as React from 'react'
import { TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export interface PublicProps {
  resetGame(): void
}

export interface State {}

export const ResetGame = (props: PublicProps) => {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor='#f6f5f0'
      onPress={() => props.resetGame()}>
      <Icon
        size={30}
        name='undo' />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    flexBasis: 0,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})