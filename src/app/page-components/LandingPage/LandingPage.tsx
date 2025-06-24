"use client";
import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Navbar from '@/app/components/Navbar/Navbar';
import HeroSection from '@/app/components/HeroSection/HeroSection';
import CardSection from '@/app/components/CardSection/CardSection';
import Loader from '@/app/components/Loader/Loader';

const LandingPage = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <HeroSection />
      <CardSection />
    </div>
  );
};

export default LandingPage;
