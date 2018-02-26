import * as React from 'react'
import { TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ButtonLayout } from 'life/state//counter'

export interface PublicProps {
  layout: ButtonLayout
  switchLayout: any
}

export interface State {}

export const SwitchLayout = (props: PublicProps) => {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={'#f6f5f0'}
      onPress={() => props.switchLayout()}>
      <Icon
        size={30}
        name={props.layout === ButtonLayout.Inner ? 'columns' : 'bars'} />
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