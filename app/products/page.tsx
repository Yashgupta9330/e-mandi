"use client"
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import potato from "../../images/potato.jpg"
import tomato from "../../images/tomato.jpg"
import cucumber from "../../images/cucumber.jpg"
import leaves from "../../images/leaves.jpg"
import spinach from "../../images/spinach.jpg"
import onion from "../../images/onion.jpg"
import carrot from "../../images/carrot.jpg"
import Link from 'next/link'

// Mock data for vegetables
const vegetables = [
    { id: 1, name: 'Tomato', price: 25, image: tomato.src, location: 'Kolkata' },
    { id: 2, name: 'Potato', price: 20, image: potato.src, location: 'Delhi' },
    { id: 3, name: 'Onion', price: 40, image: onion.src, location: 'Kolkata' },
    { id: 4, name: 'Carrot', price: 35, image: carrot.src, location: 'Mumbai' },
    { id: 5, name: 'Cucumber', price: 20, image: cucumber.src, location: 'Delhi' },
    { id: 6, name: 'Spinach', price: 30, image: spinach.src, location: 'Bangalore' },
    { id: 7, name: 'Bell Pepper', price: 50, image: leaves.src, location: 'Kolkata' },
    { id: 8, name: 'Broccoli', price: 50, image: spinach.src, location: 'Bangalore' },
]

export default function Component() {
    const [search, setSearch] = useState('')
    const [priceRange, setPriceRange] = useState([0, 50])
    const [role, setRole] = useState('all')
    const [location, setLocation] = useState('all')

    const filteredVegetables = vegetables.filter(veg =>
        veg.name.toLowerCase().includes(search.toLowerCase()) &&
        veg.price >= priceRange[0] && veg.price <= priceRange[1] &&
        (role === 'all' || (role === 'cheap' && veg.price < 2) || (role === 'premium' && veg.price >= 2)) &&
        (location === 'all' || veg.location === location)
    )

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Sidebar with filters */}
            <header className="bg-green-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">e-MANDI</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link href="/" className="hover:underline">Home</Link></li>
                            <li><Link href="/products" className="hover:underline">Products</Link></li>
                            <li><Link href="/product-listing" className="hover:underline">Add Products</Link></li>
                            <li><Link href="/login" className="hover:underline">Login</Link></li>
                            <li><Link href="/register" className="hover:underline">Register</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className='flex'>
            <aside className="w-[400px] bg-white p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <div className="space-y-6">
                    {/* Search Filter */}
                    <div>
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                        <Input
                            id="search"
                            placeholder="Search vegetables"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Price Range Slider */}
                    <div>
                        <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                        <Slider
                            defaultValue={[0]}
                            max={50}
                            step={1}
                            value={priceRange}
                            onValueChange={setPriceRange}
                            className="bg-gray-200 text-green-600"
                        />

                        <div className="text-sm text-gray-500 mt-1">
                            RS{priceRange[0].toFixed(2)} - Rs{priceRange[1].toFixed(2)}
                        </div>
                    </div>

                    {/* Role Filter */}
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                        <Select value={role} onValueChange={setRole}>
                            <SelectTrigger id="role">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="cheap">Budget-friendly</SelectItem>
                                <SelectItem value="premium">Premium</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Location Filter */}
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <Select value={location} onValueChange={setLocation}>
                            <SelectTrigger id="location">
                                <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="Kolkata">Kolkata</SelectItem>
                                <SelectItem value="Delhi">Delhi</SelectItem>
                                <SelectItem value="Mumbai">Mumbai</SelectItem>
                                <SelectItem value="Bangalore">Bangalore</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </aside>

            {/* Main content area */}
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Available Vegetables</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVegetables.map(veg => (
                        <Card key={veg.id}>
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center">
                                    <span>{veg.name}</span>
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">Available</Badge>
                                </CardTitle>
                                <span className="text-sm text-gray-500">2 days ago</span>
                            </CardHeader>
                            <CardContent>
                                <img src={veg.image} alt={veg.name} className="w-full rounded-lg h-32 object-cover mb-4" />
                                <div className='flex w-full justify-between'>
                                    <p className="text-2xl font-bold">Rs {veg.price.toFixed(2)}/kg</p>
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">{veg.location}</Badge>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                                    Add to Cart
                                </button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
            </div>
            <footer className="bg-green-600 text-white p-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 e-MANDI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
