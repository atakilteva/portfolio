
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/experience'
import Services from './components/services/service'
import Portfolio from './components/portfolio/Portfolio'
 import Testimonials from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials/>
    <Contact />
    <Footer />
    </div>
  )
}

export default App