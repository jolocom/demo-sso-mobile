import React from 'react'
import { connect } from 'react-redux'
import { RootState } from 'src/reducers'


export class LandingContainer extends React.Component<{}> {
  render() {
      return null
  }
}

const mapStateToProps = (state: RootState) => {
  return {}
}

const mapDispatchToProps = (dispatch: Function) => {
  return {}
}

export const Landing = connect(mapStateToProps, mapDispatchToProps)(LandingContainer)

