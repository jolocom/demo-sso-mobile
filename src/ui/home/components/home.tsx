import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container, Block } from 'src/ui/structure'
import { SignedCredential } from 'jolocom-lib/js/credentials/signedCredential/signedCredential';

interface State {
}

interface Props {
  credentialResponsePayload: any
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
  }
})

export class HomeComponent extends React.Component<Props, State> {

  private displayCredentials() {
    const suppliedCredentials = this.props.credentialResponsePayload.credentialResponse.suppliedCredentials
    if (suppliedCredentials) {
      const credentialTypes = suppliedCredentials.map((credential: SignedCredential) => {
        return credential.getDisplayName()
      })
      return credentialTypes.toString()
    }
  }
  render() {
    return (
      <Container style= { styles.mainContainerStyle }>
        <Block>
          <Text style={ styles.headerText }>You are now signed in!</Text>
        </Block>
        <Block>
          <Text style={ styles.subheaderText }>
            You have shared the following data:
            { this.displayCredentials() }
          </Text>
        </Block>
      </Container>
    )
  }
}
