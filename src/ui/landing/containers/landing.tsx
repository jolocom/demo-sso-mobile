import React from 'react'
import { connect } from 'react-redux'
import { LandingComponent } from '../components/landing'
import { ssoActions } from 'src/actions'
import { ThunkDispatch } from 'src/store'


interface LandingProps extends ReturnType<typeof mapDispatchToProps> {}

export class LandingContainer extends React.PureComponent<LandingProps> {
  render() {
    return (
      <LandingComponent handleButtonTap={ this.props.startSignOn } />
    )
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch) => {
  return {
    startSignOn: () => dispatch(ssoActions.startSignOn()),
  }
}


export const Landing = connect(null, mapDispatchToProps)(LandingContainer)
