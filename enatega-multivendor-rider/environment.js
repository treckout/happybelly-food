/*****************************
 * environment.js
 * path: '/environment.js' (root of your project)
 ******************************/

import * as Updates from 'expo-updates'

const ENV = {
  development: {
    GRAPHQL_URL: 'http://happybelly.site/graphql',
    WS_GRAPHQL_URL: 'wss://enatega-multivendor.up.railway.app/graphql',
    SENTRY_DSN:
      'https://e963731ba0f84e5d823a2bbe2968ea4d@o1103026.ingest.sentry.io/6135261', // [Add your own Sentry DSN link][example: https://e963731ba0f84e5d823a2bbe2968ea4d@o1103026.ingest.sentry.io/5135261]
    GOOGLE_MAPS_KEY: 'AIzaSyDUTpMXn2E7h4gLf6jWszLiprGyhchCF8k' // [Add your Google map key see documentation for more information][example: BIzaSyCzNP5qQql2a5y8lOoO - 1yj1lj_tzjVImA]
  },
  staging: {
    GRAPHQL_URL: 'http://happybelly.site/graphql',
    WS_GRAPHQL_URL: 'wss://enatega-multivendor.up.railway.app/graphql',
    SENTRY_DSN: '', // [Add your own Sentry DSN link][example: https://e963731ba0f84e5d823a2bbe2968ea4d@o1103026.ingest.sentry.io/5135261]
    GOOGLE_MAPS_KEY: '' // [Add your Google map key see documentation for more information][example: BIzaSyCzNP5qQql2a5y8lOoO - 1yj1lj_tzjVImA]
  },
  production: {
    GRAPHQL_URL: 'http://happybelly.site/graphql',
    WS_GRAPHQL_URL: 'wss://enatega-multivendor.up.railway.app/graphql',
    SENTRY_DSN:
      'https://e963731ba0f84e5d823a2bbe2968ea4d@o1103026.ingest.sentry.io/6135261', // [Add your own Sentry DSN link][example: https://e963731ba0f84e5d823a2bbe2968ea4d@o1103026.ingest.sentry.io/5135261]
    GOOGLE_MAPS_KEY: 'AIzaSyDUTpMXn2E7h4gLf6jWszLiprGyhchCF8k' // [Add your Google map key see documentation for more information][example: BIzaSyCzNP5qQql2a5y8lOoO - 1yj1lj_tzjVImA]
  }
}

const getEnvVars = (env = Updates.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  // eslint-disable-next-line no-undef
  if (env === 'production') {
    return ENV.production
  } else if (env === 'staging') {
    return ENV.staging
  } else {
    return ENV.development
  }
}

export default getEnvVars