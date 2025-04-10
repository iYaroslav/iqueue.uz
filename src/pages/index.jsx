import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Mission from "@/components/Mission/Mission"
import { useEffect, useRef, useState } from "react"
import Banner from "@/components/Banner/Banner"
import About from "@/components/About/About"
import Cultury from "@/components/Cultury/Cultury"
import Partners from "@/components/Partners/Partners"
import Products from "@/components/Products/Products"
import Works from "@/components/Works/Works"
import Plus from "@/components/Plus/Plus"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Home({ defLang }) {
  const [currentBlock, setCurrentBlock] = useState('main')
  const mainRef = useRef(null)
  const companyRef = useRef(null)
  const productsRef = useRef(null)
  const contactsRef = useRef(null)

  const handleScroll = () => {
    const mainPosition = mainRef.current.getBoundingClientRect().top
    const companyPosition = companyRef.current.getBoundingClientRect().top
    const productsPosition = productsRef.current.getBoundingClientRect().top
    const contactsPosition = contactsRef.current.getBoundingClientRect().top

    if (mainPosition >= 0 && mainPosition < window.innerHeight / 2) {
      setCurrentBlock('main')
    } else if (companyPosition >= 0 && companyPosition < window.innerHeight / 2) {
      setCurrentBlock('company')
    } else if (productsPosition >= 0 && productsPosition < window.innerHeight / 2) {
      setCurrentBlock('products')
    } else if (contactsPosition >= 0 && contactsPosition - 100 < window.innerHeight / 2) {
      setCurrentBlock('contacts')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Header
        mainRef={ mainRef }
        companyRef={ companyRef }
        productsRef={ productsRef }
        contactsRef={ contactsRef }
        currentBlock={ currentBlock }
        defLang={ defLang }
      />
      <Banner ref={ mainRef }/>
      <About ref={ companyRef }/>
      <Cultury/>
      <Plus/>
      <Works/>
      <Products ref={ productsRef }/>
      <Partners/>
      <Mission/>
      <Footer
        ref={ contactsRef }
        mainRef={ mainRef }
        companyRef={ companyRef }
        productsRef={ productsRef }
        contactsRef={ contactsRef }
        currentBlock={ currentBlock }
        setCurrentBlock={ setCurrentBlock }
      />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
