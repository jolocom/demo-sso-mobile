import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-material-ui'
import { Container, Block } from 'src/ui/structure'
import { JolocomTheme } from 'src/styles/jolocom-theme'
import { SsoState } from 'src/reducers/sso'

interface State {
}

interface Props {
  sso: SsoState
  handleIssueCredential: () => void
  handlePaymentInteraction: () => void
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
    fontSize: 18
  },
  hashText: {
    color: 'white',
    fontSize: 16,
    marginTop: '10%',
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  subheaderText: {
    color: 'white',
    fontSize: 15
  },
  buttonBlock: {
    flex: 0.1,
    backgroundColor: '#05050d',
    marginTop: '2%'
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
        <Text style={ styles.headerText }>Welcome</Text>
        {
          this.props.sso.transactionHash
          ? <Text style={ styles.hashText }>Transaction hash: {this.props.sso.transactionHash} </Text>
          : null
        }
        </Block>
        <Block style={ styles.buttonBlock}>
          <Button
            raised
            onPress={ this.props.handleIssueCredential }
            style={{
              container: styles.buttonContainer,
              text: styles.buttonText
            }}
            upperCase= { false }
            text='Receive Credential'
          />
      </Block>
      <Block style={ styles.buttonBlock }>
          <Button
            raised
            onPress={ this.props.handlePaymentInteraction }
            style={{
              container: styles.buttonContainer,
              text: styles.buttonText
            }}
            upperCase= { false }
            text='Buy a t-shirt'
          />
      </Block>
      </Container>
    )
  }
}
