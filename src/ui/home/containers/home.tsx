import React from 'react'
import { connect } from 'react-redux'
import { HomeComponent } from 'src/ui/home/components/home'
import { RootState } from 'src/reducers/'
import { SsoState } from 'src/reducers/sso'
import { ssoActions } from 'src/actions'

interface ConnectProps {
  sso: SsoState
  issueSignedCredential: () => void
  startPaymentInteraction: () => void
  credentialResponsePayload: SsoState
}

interface Props extends ConnectProps {}

export class HomeContainer extends React.Component<Props> {
  render() {
      return (
        <HomeComponent
          sso={ this.props.sso }
          handleIssueCredential={ this.props.issueSignedCredential }
          handlePaymentInteraction={ this.props.startPaymentInteraction }
        />
      )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    sso: state.sso
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    startPaymentInteraction: () => dispatch(ssoActions.startPaymentInteraction()),
    issueSignedCredential: () => dispatch(ssoActions.issueSignedCredential())
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
