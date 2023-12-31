import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'
import AppStore from '../components/AppStore/AppStore'
import Testimonial from '../components/Testimonial/Testimonial'

export const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Banner />
        <AppStore />
      <Testimonial />
    </div>
  )
}
