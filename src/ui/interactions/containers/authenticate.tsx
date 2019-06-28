import * as React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { RootState } from 'src/reducers/'
import { ThunkDispatch } from 'src/store'
import { NavigationNavigatorProps } from 'react-navigation'
import { JolocomLib } from 'jolocom-lib'

interface Props extends ReturnType<typeof mapDispatchToProps>, ReturnType<typeof mapStateToProps>, NavigationNavigatorProps {}

export class AuthenticationContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
    const { navigation } = this.props
    const encodedJWT = navigation && navigation.getParam('encodedJWT', null)
    if (encodedJWT) {
      const decodedToken = JolocomLib.parse.interactionToken.fromJWT(encodedJWT)
    }
  }

  render() {
    return (
      <Text>AUTH PLACEHOLDER</Text>
    )
  }
}

const mapStateToProps = (state: RootState) => ({ })

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({ })

export const Authentication = connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer)
