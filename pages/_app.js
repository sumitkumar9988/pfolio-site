import { useEffect } from 'react'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { init } from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    init('G-4LDK1CPP7W');
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
