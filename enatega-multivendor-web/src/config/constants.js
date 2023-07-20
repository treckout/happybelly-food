/* eslint-disable no-unused-vars */
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const WS_SERVER_URL = process.env.REACT_APP_WS_SERVER_URL;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const Paystack_PUBLIC_KEY = process.env.REACT_APP_Paystack_PUBLIC_KEY;
const PAYPAL_KEY = process.env.REACT_APP_PAYPAL_KEY;
const GOOGLE_MAPS_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;
const AMPLITUDE_API_KEY = process.env.REACT_APP_AMPLITUDE_API_KEY;
const LIBRARIES = process.env.REACT_APP_GOOGLE_MAP_LIBRARIES.split(",");
const COLORS = {
  GOOGLE: process.env.REACT_APP_GOOGLE_COLOR,
};
const SENTRY_DSN = process.env.SENTRY_DSN;
export {
  SERVER_URL,
  WS_SERVER_URL,
  GOOGLE_CLIENT_ID,
  COLORS,
  PAYPAL_KEY,
  Paystack_PUBLIC_KEY,
  GOOGLE_MAPS_KEY,
  AMPLITUDE_API_KEY,
  LIBRARIES,
  SENTRY_DSN,
};
