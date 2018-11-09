import React from 'react'
import { connect } from 'react-redux'
import { Linking } from 'react-native'
import { LandingComponent } from 'src/ui/landing/components/landing'
import { RootState } from 'src/reducers/'

interface ConnectProps {
}

interface Props extends ConnectProps {}

export class LandingContainer extends React.Component<Props> {

  async handleButtonTap() {
    let encodedCredentialRequestJwt
    await fetch('http://192.168.2.105:9000/credentialRequest')
      .then(async (encodedJwt) => {
        encodedCredentialRequestJwt = await encodedJwt.text()
      })
    Linking.openURL('jolocomwallet://consent/' + encodedCredentialRequestJwt)
  }

  //on success, navigate to home screen

  render() {
      return (
        <LandingComponent handleButtonTap={ this.handleButtonTap } />
      )
  }
}

const mapStateToProps = (state: RootState) => {
  return {}
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
  }
}

export const Landing = connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
