import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../Components/AboutMe/AboutMe'
import Banner from '../Components/Banner/Banner'
import EmailMe from '../Components/EmailMe/EmailMe'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'
import Projects from '../Components/Projects/Projects'
import Skills from '../Components/Skills/Skills'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MSN</title>
      </Head>
      <NavBar></NavBar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <EmailMe></EmailMe>
      <Footer></Footer>
    </div>
  )
}
