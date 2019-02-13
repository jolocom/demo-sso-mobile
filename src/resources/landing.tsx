import React from 'react'
import { ImageBackground } from 'react-native'
const image = require('src/resources/img/00.jpg')


export class LandingImage extends React.PureComponent {
  render() {
    return(
        <ImageBackground
          source={ image }
          style={{ width: '100%', height: '100%' , position: 'absolute'}}
        />
    )
  }
}
 