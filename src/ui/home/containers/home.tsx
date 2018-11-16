import React from 'react'
import { connect } from 'react-redux'
import { Linking } from 'react-native'
import { HomeComponent } from 'src/ui/home/components/home'
import { RootState } from 'src/reducers/'
import { SsoState } from 'src/reducers/sso'


interface ConnectProps {
  credentialResponsePayload: SsoState
}

interface Props extends ConnectProps {}

export class HomeContainer extends React.Component<Props> {

  async handleButtonTap() {
    let encodedReceivedCredential
    await fetch('https://demo-sso.jolocom.com/receive', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJjcmVkZW50aWFsT2ZmZXIiOnsiaW5zdGFudCI6dHJ1ZSwiY2hhbGxlbmdlIjoiaGFoN24iLCJyZXF1ZXN0ZWRJbnB1dCI6e30sImNhbGxiYWNrVVJMIjoiaHR0cHM6Ly9kZW1vLXNzby5qb2xvY29tLmNvbS9yZWNlaXZlLyJ9LCJ0eXAiOiJjcmVkZW50aWFsT2ZmZXJSZXF1ZXN0IiwiaWF0IjoxNTQyMjk4MTI1NDEzLCJpc3MiOiJkaWQ6am9sbzo3OTJiMTA2Y2U5M2JjOWUyMDBmNzgxMmQzM2RiYzNhMzY3YzU3YTBkNWFmMTFkMDkzNWVhZTFjYTEzYzVjMTY3I2tleXMtMSJ9.F1b_t4ZwpepsvIft8DSc0ndPmwKPZN0J_DMTa8u6R0ykwQsDCy3kr7VcpQcSYXcFVq2V7c9LVsPyikjwklXBcQ',
      }),
    }).then(async (response) => {
      const credentialJwt = await response.json()
      encodedReceivedCredential = credentialJwt.token
    })
    Linking.openURL('jolocomwallet://consent/' + encodedReceivedCredential)
  }

  render() {
      return (
        <HomeComponent handleButtonTap={this.handleButtonTap}/>
      )
  }
}

const mapStateToProps = (state: RootState) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
