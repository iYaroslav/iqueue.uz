import { Fragment } from "react"
import { useRouter } from "next/router"
import Header from '@/components/Header/Header'
import TeamProfile from '@/components/TeamProfile/TeamProfile'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Profile({ defLang }) {
  const router = useRouter()
  const path = router.query.profile

  return <Fragment>
    <Header isProfile defLang={ defLang }/>
    <TeamProfile path={ path }/>
  </Fragment>
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Profile
