import React, { useContext, useLayoutEffect, useEffect } from 'react'
import { View, TouchableOpacity, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import ThemeContext from '../../ui/ThemeContext/ThemeContext'
import { theme } from '../../utils/themeColors'
import TextDefault from '../../components/Text/TextDefault/TextDefault'
import Analytics from '../../utils/analytics'
const links = [
  {
    title: 'Join Us ',
    url:
      'https://happybelly.site/join-us-today/'
  },
  {
    title: 'Docs',
    url: 'https://enatega-multi.gitbook.io/enatega-multivendor/'
  },
  {
    title: 'Live Chat',
    url:
      'https://tawk.to/chat/64b7a9a8cc26a871b0295843/1h5mmtf1f/'
  },
  { title: 'About Us', url: 'https://happybelly.site/about-us/' }
]
function Help(props) {
  const themeContext = useContext(ThemeContext)
  const currentTheme = theme[themeContext.ThemeValue]
  useEffect(() => {
    async function Track() {
      await Analytics.track(Analytics.events.NAVIGATE_TO_HELP)
    }
    Track()
  }, [])
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: null,
      headerTitle: 'Help Center'
    })
  }, [props.navigation])

  return (
    <SafeAreaView
      edges={['bottom', 'right', 'left']}
      style={styles(currentTheme).flex}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={currentTheme.headerBackground}
      />
      <View style={styles(currentTheme).flex}>
        {links.map(({ title, url }, index) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('HelpBrowser', { title, url })
            }
            style={styles(currentTheme).itemContainer}
            key={index}>
            <TextDefault textColor={currentTheme.fontMainColor} bold>
              {title}
            </TextDefault>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Help
