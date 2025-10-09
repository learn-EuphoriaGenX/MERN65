import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Deals from '../components/Deals'
import Category from '../components/Category'

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Deals />
            <Category />
        </div>
    )
}

export default Home