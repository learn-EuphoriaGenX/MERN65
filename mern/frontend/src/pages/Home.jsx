import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Deals from '../components/Deals'
import Category from '../components/Category'
import Footer from '../components/Footer'

function Home({ item }) {



    return (
        <div>
            <Hero />
            <Deals item={item} />
            <Category />
        </div>
    )
}

export default Home