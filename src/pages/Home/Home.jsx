import React from 'react'
import Banner from '../../components/Home/Banner'
import Brands from '../../components/Home/Brands'
import HotDeals from '../../components/Home/HotDeals'
import Slider from '../../components/Home/Slider'


function Home() {
  return (
    <>
        <Slider />
        <Banner />
        <HotDeals />
        <Brands />
    </>
  )
}

export default Home