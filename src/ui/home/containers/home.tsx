import * as React from 'react'
import { connect } from 'react-redux'
import { HomeComponent } from 'src/ui/home/components/home'
import { RootState } from 'src/reducers/'
import { ssoActions } from 'src/actions'
import { ThunkDispatch } from 'src/store'

interface Props extends ReturnType<typeof mapDispatchToProps>, ReturnType<typeof mapStateToProps> {}

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

const mapStateToProps = (state: RootState) => ({
  sso: state.sso
})

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  startPaymentInteraction: () => dispatch(ssoActions.startPaymentInteraction()),
  issueSignedCredential: () => dispatch(ssoActions.issueSignedCredential())
})

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
