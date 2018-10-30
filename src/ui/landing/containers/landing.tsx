import React from 'react'
import { connect } from 'react-redux'
import { LandingComponent } from 'src/ui/landing/components/landing'
import { ssoActions } from 'src/actions/'
import { RootState } from 'src/reducers/'
import Immutable from 'immutable'

interface ConnectProps {
  startSSO: () => void
  loading: boolean
}

interface Props extends ConnectProps {}


export class LandingContainer extends React.Component<Props> {

  render() {
      return (
        <LandingComponent handleButtonTap={ this.props.startSSO } />
      )
  }
}

const mapStateToProps = (state: RootState) => {
  const loading = Immutable.fromJS(state.account.loading)
  return {
    loading: loading.get('loading')
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    startSSO: () => dispatch(ssoActions.startSSO()),
  }
}

export const Landing = connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
