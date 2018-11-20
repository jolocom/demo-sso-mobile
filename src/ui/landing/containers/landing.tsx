import React from 'react'
import { connect } from 'react-redux'

import { LandingComponent } from 'src/ui/landing/components/landing'
import { RootState } from 'src/reducers/'
import { ssoActions } from 'src/actions'


interface ConnectProps {
  startSignOn: () => void
  setRemotlyGeneratedToken: (token: string) => void
}

interface Props extends ConnectProps {}

export class LandingContainer extends React.Component<Props> {
  render() {
      return (
        <LandingComponent handleButtonTap={ this.props.startSignOn } />
      )
  }
}

const mapStateToProps = (state: RootState) => {
  return {}
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    startSignOn: () => dispatch(ssoActions.startSignOn()),
    setRemotlyGeneratedToken: (token: string) => dispatch(ssoActions.setRemotlyGeneratedToken(token))
  }
}

export const Landing = connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
