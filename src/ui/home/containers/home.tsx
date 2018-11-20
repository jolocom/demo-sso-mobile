import React from 'react'
import { connect } from 'react-redux'
import { HomeComponent } from 'src/ui/home/components/home'
import { RootState } from 'src/reducers/'
import { SsoState } from 'src/reducers/sso'
import { ssoActions } from 'src/actions'

interface ConnectProps {
  issueSignedCredential: () => void
  credentialResponsePayload: SsoState
}

interface Props extends ConnectProps {}

export class HomeContainer extends React.Component<Props> {
  render() {
      return (
        <HomeComponent handleButtonTap={ this.props.issueSignedCredential }/>
      )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    issueSignedCredential: () => dispatch(ssoActions.issueSignedCredential())
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
