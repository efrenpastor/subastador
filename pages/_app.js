import { DomainContextProvider } from '../context/domain'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DomainContextProvider>
      <Component {...pageProps} />
    </DomainContextProvider>
  )
}

export default MyApp
