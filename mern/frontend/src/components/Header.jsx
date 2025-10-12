import React from 'react'
import location from '../assets/Location.png'
import truck from '../assets/truck.png'
import discount from '../assets/Discount.png'
import menu from '../assets/menu.png'
import search from '../assets/Search.png'
import list from '../assets/list.png'
import user from '../assets/user.png'
import buy from '../assets/buy.png'
import arrow from '../assets/Arrow.png'
import { Link } from 'react-router-dom'

function Header() {
    const categories = [
        'Computers',
        'Mobiles',
        'Properties',
        'Fashion',
        'Sports, Toys & Luggage',
        'Home & Kitchen',
        'Electronics'
    ]

    return (
        <nav className="w-full shadow-sm bg-white">
            {/* Top Info Bar */}
            <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-gray-50 text-sm text-gray-600">
                <p className="font-medium">Welcome to worldwide Megamart!</p>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                        <img src={location} alt="location" className="w-4 h-4" />
                        <span>Deliver to <b>423651</b></span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                        <img src={truck} alt="truck" className="w-4 h-4" />
                        <span>Contact your Seller</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
                        <img src={discount} alt="discount" className="w-4 h-4" />
                        <span>All Offers</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex flex-wrap items-center justify-between px-6 py-3">
                {/* Logo & Menu */}
                <Link to="/">
                    <div className="flex items-center gap-3">
                        <img src={menu} alt="menu" className="w-8 h-8 cursor-pointer hover:scale-105 transition" />
                        <span className="text-2xl font-bold text-blue-600">MegaMart</span>
                    </div>
                </Link>

                {/* Search Bar */}
                <div className="flex items-center w-full md:w-1/2 bg-gray-100 rounded-full px-4 py-2 shadow-inner">
                    <img src={search} alt="search" className="w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search Computers, Cars, Bikes and more..."
                        className="w-full bg-transparent outline-none px-3 text-gray-700 placeholder-gray-500"
                    />
                    <img src={list} alt="list" className="w-5 h-5 cursor-pointer hover:scale-110 transition" />
                </div>

                {/* User & Cart */}
                <div className="flex items-center gap-6">
                    <Link to="/signin">
                        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
                            <img src={user} alt="user" className="w-6 h-6" />
                            <span className="font-medium text-gray-700">Sign In / Sign Up</span>
                        </div>
                    </Link>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
                        <img src={buy} alt="cart" className="w-6 h-6" />
                        <span className="font-medium text-gray-700">Sell Product</span>
                    </div>
                </div>
            </div>

            {/* Category Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 py-3 border-t border-b bg-sky-50 text-gray-700 text-sm font-medium">
                {categories.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-1 px-2 py-1 hover:text-gray-600 cursor-pointer transition"
                    >
                        <span>{item}</span>
                        <img src={arrow} alt="arrow" className="w-4 h-4" />
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Header
