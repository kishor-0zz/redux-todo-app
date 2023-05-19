import Layout from '@/Components/Layout/Layout'
import Meta from '@/Components/Meta/Meta'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from './Redux/store'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store} >
        <Meta />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
