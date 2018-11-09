import React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-material-ui'
import { Block, Container } from 'src/ui/structure'

interface State {
}

interface Props {
}

const styles = StyleSheet.create({
  mainContainerStyle: {
    paddingTop: 0,
    backgroundColor: '#05050d',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1
  }
})

export class HomeComponent extends React.Component<Props, State> {
  state = {
  }

  render() {
    return (
      <Container style= { styles.mainContainerStyle }>
      </Container>
    )
  }
}
