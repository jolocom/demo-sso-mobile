import React from 'react'
import { connect } from 'react-redux'
import { HomeComponent } from 'src/ui/home/components/home'
import { RootState } from 'src/reducers/'

interface ConnectProps {
}

interface Props extends ConnectProps {}

export class HomeContainer extends React.Component<Props> {


  render() {
      return (
        <HomeComponent/>
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

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
