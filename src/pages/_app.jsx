import "@/styles/globals.scss"
import { appWithTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [defLang, setDefLang] = useState('')

  useEffect(() => {
    const existLocales = ['en', 'ru', 'uz']
    let hasLocale

    const browserLocale = navigator.language || navigator.languages[0]
    let locale = browserLocale.split('-')[0]

    hasLocale = existLocales.includes(locale)

    locale = hasLocale ? locale : 'uz'

    setDefLang(locale)

    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale: locale },
    ).catch(console.error)
  }, [])

  return <Component { ...pageProps } defLang={ defLang }/>
}

export default appWithTranslation(MyApp)
