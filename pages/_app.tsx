import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { IBM_Plex_Mono, Secular_One } from '@next/font/google'

const secularOneFont = Secular_One({
  weight: '400',
  subsets: ['latin'],
})

const ibmPlexMonoFont = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        .title, h1, h2, h3 {
          font-family: ${secularOneFont.style.fontFamily};
        } 
      `}</style>
      <main className={ibmPlexMonoFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
