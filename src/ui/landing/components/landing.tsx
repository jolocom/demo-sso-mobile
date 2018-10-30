import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-material-ui'
import { Block, Container, CenteredText } from 'src/ui/structure'
import { JolocomTheme } from 'src/styles/jolocom-theme'
import { ReactNode } from 'react'

interface State {
}

interface Props {
  handleButtonTap: () => void;
}

interface Slide {
  svgImage: ReactNode;
  title: string;
  infoText: string;
}

const viewWidth: number = Dimensions.get('window').width

const styles = StyleSheet.create({
  mainContainerStyle: {
    paddingTop: 0,
    backgroundColor: '#05050d', 
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1
  },
  carouselTextContainer: {
    padding: '10%',
    flex: 0.4,
    marginTop: 'auto',
    backgroundColor: 'transparent' 
  },
  activeDotStyle: {
    width: 8,
    height: 8,
    backgroundColor: JolocomTheme.dotColorActive
  },
  inactiveDotStyle: {
    width: 4,
    height: 4,
    opacity: 0.6,
    backgroundColor: JolocomTheme.dotColorInactive
  },
  header: {
    color: JolocomTheme.primaryColorSand,
    fontFamily: JolocomTheme.contentFontFamily, 
    fontSize: JolocomTheme.landingHeaderFontSize,
    fontWeight: '100'
  },
  headerBlock: {
    marginBottom: 0 
  }, 
  subHeaderBlock: {
    marginBottom: 0,
  },
  subHeader: {
    fontWeight: '100',
    color: JolocomTheme.primaryColorSand,
    fontFamily: JolocomTheme.contentFontFamily, 
    opacity: 0.8,
    fontSize: JolocomTheme.labelFontSize,
    lineHeight: JolocomTheme.labelFontSize + 4
  },
  paginationBlock: {
    flex: 0.2,
    backgroundColor: '#05050d' 
  },
  buttonBlock: {
    flex: 0.1,
    backgroundColor: '#05050d' 
  },
  buttonContainer: {
    height: '100%',
    width: '50%',
    borderRadius: 4,
    backgroundColor: JolocomTheme.primaryColorPurple
  },
  buttonText: {
    fontFamily: JolocomTheme.contentFontFamily,
    color: JolocomTheme.primaryColorWhite,
    fontSize: JolocomTheme.headerFontSize,
    fontWeight: "100" 
  }
})

export class LandingComponent extends React.Component<Props, State> {
  state = {
  }

  render() {
    return (
      <Container style= { styles.mainContainerStyle }>
        <Block>
        </Block>
        <Block style={ styles.buttonBlock}>
          <Button
            raised
            onPress={ this.props.handleButtonTap }
            style={{
              container: styles.buttonContainer,
              text: styles.buttonText
            }}
            upperCase= { false }
            text='Sign in with Jolocom'
          />
        </Block>
      </Container>
    )
  }
}
