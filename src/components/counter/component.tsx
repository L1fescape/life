import * as React from 'react'
import { View, TouchableHighlight, Text, TextInput, StyleSheet } from 'react-native'
import { Counter as CounterModel, ButtonLayout } from 'life/state/counter'

export interface PublicProps {
  counters: CounterModel[]
  increment: any
  decrement: any
  changeName: any
  layout: ButtonLayout
}

const pallet = {
  white: '#F0EADC',
  black: '#292B2E',
  green: '#5E6259',
  lightGreen: '#6a6d66',
  gold: '#BB7C3E',
  beige: '#E7D7C6',
}

export interface State {}

interface ButtonProps {
  text: string
  onPress(): void
}

const Button = (props: ButtonProps) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor={pallet.lightGreen}
    onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableHighlight>
)

export class Counter extends React.Component<PublicProps, State> {
  render() {
    const { layout } = this.props
    return [
      ...this.props.counters.map((counter, index) => (
        <View key={index} style={styles.counter}>
          { layout === ButtonLayout.Outer && (
            <View style={[styles.buttons, styles.buttonsOuter]}>
              <Button text='+' onPress={() => this.props.increment(index)} />
            </View>
          )}
          <View style={styles.container}>
            <Text style={styles.countText}>
              {counter.value}
            </Text>
            { layout === ButtonLayout.Inner && (
              <View style={styles.buttons}>
                <Button text='+' onPress={() => this.props.increment(index)} />
                <View style={styles.buttonSpacer} />
                <Button text='-' onPress={() => this.props.decrement(index)} />
              </View>
            )}
          </View>
          { layout === ButtonLayout.Outer && (
            <View style={[styles.buttons, styles.buttonsOuter]}>
              <Button text='-' onPress={() => this.props.decrement(index)} />
            </View>
          )}
          <TextInput
            style={styles.nameText}
            editable={false}
            onChangeText={(text) => this.props.changeName(index, text)}
            placeholder={`Player ${index + 1}`}
            value={counter.name} />
        </View>
      )),
    ]
  }
}

const counterPadding = 5

const styles = StyleSheet.create({
  counter: {
    paddingRight: counterPadding * 2,
    paddingLeft: counterPadding * 2,
    width: 170,
  },
  container: {
    display: 'flex',
    backgroundColor: pallet.white,
    borderRadius: 2,
    padding: counterPadding,
  },
  countText: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: counterPadding,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonsOuter: {
    marginTop: counterPadding,
    marginBottom: counterPadding,
  },
  button: {
    flexGrow: 1,
    backgroundColor: pallet.green,
    display: 'flex',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: counterPadding,
    paddingTop: counterPadding * 2,
    paddingBottom: counterPadding * 2,
  },
  buttonText: {
    color: pallet.white,
    fontSize: 20,
  },
  nameText: {
    color: pallet.white,
    textAlign: 'center',
    paddingTop: counterPadding,
  },
  buttonSpacer: {
    width: counterPadding,
    backgroundColor: pallet.white,
  },
})
