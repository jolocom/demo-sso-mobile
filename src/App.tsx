import React from 'react'
import { Provider } from 'react-redux'
import { ThemeContext, getTheme } from 'react-native-material-ui'
import { createAppContainer } from "react-navigation";
import { JolocomTheme } from 'src/styles/jolocom-theme'
import { store } from './store'
import { Routes } from 'src/routes'
import config from '../config'

const Navigation = createAppContainer(Routes);

const App = () => {
  return (
    <ThemeContext.Provider value={getTheme(JolocomTheme)}>
      <Provider store={store}>
        <Navigation uriPrefix={config.APP_URI_PREFIX} />
      </Provider>
    </ThemeContext.Provider>
  )
}

export default App
