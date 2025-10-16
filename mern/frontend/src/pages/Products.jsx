import React, { useEffect, useState } from 'react'
import axios from 'axios'
import arrow from '../assets/Arrow.png'
import ProductCard from '../components/ProductCard'

export default function Products() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('beauty')

    const fetchCategories = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products/categories')
            setCategories(res.data)
        } catch (error) {
            alert(error.message)
        }
    }

    const fetchProducts = async (category) => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/products/category/${category}`)
            setProducts(data.products)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        fetchCategories()
        fetchProducts('beauty')
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            fetchProducts(selectedCategory)
        }
    }, [selectedCategory])

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-[22vw] bg-white border-r border-gray-200 shadow-md p-6 sticky top-0 h-screen overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-5 text-gray-800">Categories</h2>
                <div className="flex flex-col gap-2">
                    {categories.length > 0 ? (
                        categories.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedCategory(item.slug)}
                                className={`flex items-center justify-between rounded-xl py-3 px-4 cursor-pointer transition-all duration-200 border 
                                    ${selectedCategory === item
                                        ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                                        : 'bg-gray-100 border-gray-100 hover:bg-gray-200 hover:border-gray-300 text-gray-700'
                                    }`}
                            >
                                <span className="capitalize text-[15px] font-medium">{item.name.replace('-', ' ')}</span>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className={`w-4 h-4 transition-transform ${selectedCategory === item ? 'rotate-0' : 'rotate-[-90deg]'}`}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm">Loading categories...</p>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 capitalize">
                        {selectedCategory.replace('-', ' ')} Products
                    </h1>
                    <p className="text-gray-500 text-sm">Showing {products.length} results</p>
                </div>

                {/* Product Grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {products.length > 0 ? (
                        products.map((item, idx) => (
                            <ProductCard
                                key={idx}
                                name={item.title}
                                price={`$${item.price}`}
                                disPrice={`$${(item.price + item.price * 0.1).toFixed(2)}`}
                                off={`${item.discountPercentage}% OFF`}
                                thumbnail={item.thumbnail}
                                save={`$${Math.floor(item.price * 0.2)}`}
                            />
                        ))
                    ) : (
                        <p className="text-gray-400 text-center col-span-full">No products found.</p>
                    )}
                </div>
            </main>
        </div>
    )
}
