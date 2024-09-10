import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaBullhorn, FaDollarSign, FaLock, FaUserFriends } from "react-icons/fa";
import Farmered from "../images/farmerd.webp"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import potato from "../images/potato.jpg"
import tomato from "../images/tomato.jpg"
import onion from "../images/onion.jpg"
import Footer from "@/components/normal/footer";


export default function Home() {
  const products = [
    {
      id: 1,
      name: "Tomato",
      image: tomato.src,
      price: 40,
      location: "Delhi"
    },
    {
      id: 2,
      name: "Potato",
      image: potato.src,
      price: 30,
      location: "Mumbai"
    },
    {
      id: 3,
      name: "Onion",
      image: onion.src,
      price: 50,
      location: "Pune"
    }
  ];
  
  return (
    <div className="w-full min-h-screen">
      <header className="bg-green-600 text-white p-4">
        <div className="flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">E-MANDI</h1>
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
      <section className="hero-section flex justify-between items-center">
        <div className="hero-content mr-4">
          <h1>Connecting Farmers to the Best Market Deals</h1>
          <p>Buy and Sell Fresh Produce and Grains with Ease.</p>
          <Link href="/product-listing" className="cta-button">Start Selling</Link>
        </div>
        <div className="hero-image">
          <Image src={Farmered} alt="Happy Farmer" width={700} height={250} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="container">
          <h2>Why Choose E-mandi?</h2>
          <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="feature-card flex flex-col items-center text-center">
              <FaBullhorn className="feature-icon text-4xl mb-4" />
              <h3>Direct Market Access</h3>
              <p>Sell directly to buyers without intermediaries.</p>
            </div>
            <div className="feature-card flex flex-col items-center text-center">
              <FaDollarSign className="feature-icon text-4xl mb-4" />
              <h3>Fair Pricing</h3>
              <p>Transparent pricing based on current market rates.</p>
            </div>
            <div className="feature-card flex flex-col items-center text-center">
              <FaLock className="feature-icon text-4xl mb-4" />
              <h3>Secure Transactions</h3>
              <p>Safe and easy payments for both buyers and sellers.</p>
            </div>
            <div className="feature-card flex flex-col items-center text-center">
              <FaUserFriends className="feature-icon text-4xl mb-4" />
              <h3>User-Friendly Platform</h3>
              <p>Simple steps to register, list, and trade.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Marketplace Preview */}
      <section id="marketplace-preview">
      <div className="container">
        <h2 className="text-black font-bold">Explore Our Marketplace</h2>
        <div className="carousel flex items-center">
          <button className="prev">&#10094;</button>
          <div className="slides flex gap-3">
            {products.map((veg) => (
                <Card key={veg.id} className="w-[350px]">
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
          <button className="next">&#10095;</button>
        </div>
        <Link href="/products" className="cta-button">See More Products</Link>
      </div>
    </section>
      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content text-center">
          <h2 className="text-black">Join Thousands of Farmers Growing Their Business on E-mandi</h2>
          <Link href="/register" className="cta-button">Register Now</Link>
        </div>
      </section>
     <Footer/>
    </div>
  );
}
