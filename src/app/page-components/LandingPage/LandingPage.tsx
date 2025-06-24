import React from 'react'
import styles from './style.module.scss'
import Navbar from '@/app/components/Navbar/Navbar'
import HeroSection from '@/app/components/HeroSection/HeroSection'
import CardSection from '@/app/components/CardSection/CardSection'

const landingPage = () => {
  return (
    <div className='container'>
      <Navbar />
      <HeroSection />
      <CardSection />
    </div>
  )
}

export default landingPage
