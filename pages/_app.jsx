import Layout from "../components/Layout"

import "../styles/global.scss"
import "../styles/theme.scss"

export default function App({ Component, pageProps, router }) {
  return (
    <Layout route={'a'}>
      <Component {...pageProps} />
    </Layout>
  )
}