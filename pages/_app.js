import { useEffect } from 'react'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { init } from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    init('G-PT4G55SJ2E');
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
