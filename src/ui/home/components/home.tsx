import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container } from 'src/ui/structure'

interface State {
}

interface Props {
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    paddingTop: 0,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1
  },
  headerText: {
    color: 'white',
    fontSize: 36
  }
})

export class HomeComponent extends React.Component<Props, State> {
  state = {
  }

  render() {
    return (
      <Container style= { styles.mainContainerStyle }>
      <View>
        <Text style={ styles.headerText }>You are now signed in!</Text>
      </View>
      </Container>
    )
  }
}
