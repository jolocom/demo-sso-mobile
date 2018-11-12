import React from 'react'
import { connect } from 'react-redux'
import { HomeComponent } from 'src/ui/home/components/home'
import { RootState } from 'src/reducers/'
import { SsoState } from 'src/reducers/sso'


interface ConnectProps {
  credentialResponsePayload: SsoState
}

interface Props extends ConnectProps {}

export class HomeContainer extends React.Component<Props> {


  render() {
      return (
        <HomeComponent
          credentialResponsePayload={this.props.credentialResponsePayload}
        />
      )
  }
}

const mapStateToProps = (state: RootState) => {
  const credentialResponsePayload = state.sso.credentialResponsePayload
  return {
    credentialResponsePayload
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
