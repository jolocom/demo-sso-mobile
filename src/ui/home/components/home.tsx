import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-material-ui'
import { Container, Block } from 'src/ui/structure'
import { JolocomTheme } from 'src/styles/jolocom-theme'

interface State {
}

interface Props {
  handleButtonTap: () => void
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
  },
  subheaderText: {
    color: 'white',
    fontSize: 15
  },
  buttonBlock: {
    flex: 0.1,
    backgroundColor: '#05050d'
  },
  buttonContainer: {
    height: '100%',
    width: '50%',
    borderRadius: 4,
    backgroundColor: JolocomTheme.primaryColorPurple
  },
  buttonText: {
    fontFamily: JolocomTheme.contentFontFamily,
    color: JolocomTheme.primaryColorWhite,
    fontSize: 15,
    fontWeight: "100"
  }
})

export class HomeComponent extends React.Component<Props, State> {

  render() {
    return (
      <Container style= { styles.mainContainerStyle }>
        <Block>
          <Text style={ styles.headerText }>You are now signed in!</Text>
        </Block>
        <Block style={ styles.buttonBlock}>
        <Button
          raised
          onPress={ this.props.handleButtonTap }
          style={{
            container: styles.buttonContainer,
            text: styles.buttonText
          }}
          upperCase= { false }
          text='Receive external credential'
        />
      </Block>
      </Container>
    )
  }
}
