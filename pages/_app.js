// `pages/_app.js`
import '../styles/globals.css';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { SSRProvider } from 'react-aria'

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primary: '#783f04',
      secondary: '#b45f06',
      grayFont: '#7d7d7d',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',

      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

export default function App({ Component, pageProps }) {
  return (
    // <SWRConfig value={{fetcher}}>
    //   <NextUIProvider>
    //     <Component {...pageProps} />
    //   </NextUIProvider>
    // </SWRConfig>
    <SSRProvider>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SSRProvider>
  )
}
