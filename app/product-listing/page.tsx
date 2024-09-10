"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, CheckCircle2, ChevronDown } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Command, CommandGroup, CommandItem } from "@/components/ui/command"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Navbar } from "@/components/normal/Navbar"

type Product = {
  id: number
  name: string
  category: string
  quantity: number
  minQuantity: number
  price: number
  farmerName: string
  location: string
  availabilityDate: string
  paymentMethods: string
  contactInfo: string
  description?: string
  imageUrl?: string
  sku?: string
  tags?: string[]
  shelfLife?: string
  discount?: string
  notes?: string
  certification?: string
}

export default function FarmerProductListingPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    quantity: "",
    minQuantity: "",
    price: "",
    farmerName: "",
    location: "",
    availabilityDate: "",
    paymentMethods: "",
    contactInfo: "",
    description: "",
    imageUrl: "",
    sku: "",
    tags: "",
    shelfLife: "",
    discount: "",
    notes: "",
    certification: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [categoryDropdown, setCategoryDropdown] = useState<string | null>("")
  const [userRole, setUserRole] = useState("Select user role")

  const roles = [
    "Farmer",
    "Wholesaler",
    "Retailer",
    "Buyer"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewProduct(prev => ({ ...prev, [name]: value }))
  }

  const handleCategoryChange = (category: string) => {
    setCategoryDropdown(category)
    setNewProduct((prev) => ({ ...prev, category }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      const productToAdd: Product = {
        id: products.length + 1,
        name: newProduct.name,
        category: newProduct.category,
        quantity: Number(newProduct.quantity),
        minQuantity: Number(newProduct.minQuantity),
        price: Number(newProduct.price),
        farmerName: newProduct.farmerName,
        location: newProduct.location,
        availabilityDate: newProduct.availabilityDate,
        paymentMethods: newProduct.paymentMethods,
        contactInfo: newProduct.contactInfo,
        description: newProduct.description,
        imageUrl: newProduct.imageUrl,
        sku: newProduct.sku,
        tags: newProduct.tags ? newProduct.tags.split(',') : [],
        shelfLife: newProduct.shelfLife,
        discount: newProduct.discount,
        notes: newProduct.notes,
        certification: newProduct.certification
      }
      setProducts(prev => [...prev, productToAdd])
      setNewProduct({
        name: "",
        category: "",
        quantity: "",
        minQuantity: "",
        price: "",
        farmerName: "",
        location: "",
        availabilityDate: "",
        paymentMethods: "",
        contactInfo: "",
        description: "",
        imageUrl: "",
        sku: "",
        tags: "",
        shelfLife: "",
        discount: "",
        notes: "",
        certification: ""
      })
      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Header */}
      <Navbar/>
      {/* Main content */}
      <main className="flex-grow container mx-auto mt-8 p-4">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Farmer Product Listing</h2>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-4 text-center">Add New Product</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-4">
              {/* Existing fields */}
              <div className="w-full">
              <label htmlFor="user-role" className="w-full block text-sm font-medium text-gray-700">User Role</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {userRole}
                    <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[1200px]">
                  {roles.map((role) => (
                    <DropdownMenuItem
                      key={role}
                      onSelect={() => setUserRole(role)}
                    >
                      {role}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Available (kg)</Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={newProduct.quantity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minQuantity">Minimum Quantity (kg)</Label>
                <Input
                  id="minQuantity"
                  name="minQuantity"
                  type="number"
                  value={newProduct.minQuantity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farmerName">Farmer Name</Label>
                <Input
                  id="farmerName"
                  name="farmerName"
                  value={newProduct.farmerName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price (₹ per kg)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={newProduct.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="availabilityDate">Availability Date</Label>
                <Input
                  id="availabilityDate"
                  name="availabilityDate"
                  type="date"
                  value={newProduct.availabilityDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentMethods">Payment Methods</Label>
                <Input
                  id="paymentMethods"
                  name="paymentMethods"
                  value={newProduct.paymentMethods}
                  onChange={handleInputChange}
                  placeholder="e.g., Cash, Online Payment, UPI"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactInfo">Contact Information</Label>
                <Input
                  id="contactInfo"
                  name="contactInfo"
                  value={newProduct.contactInfo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* New fields */}
              
              <div className="space-y-2">
                <Label htmlFor="shelfLife">Shelf Life</Label>
                <Input
                  id="shelfLife"
                  name="shelfLife"
                  value={newProduct.shelfLife}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="discount">Discount</Label>
                <Input
                  id="discount"
                  name="discount"
                  value={newProduct.discount}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding Product..." : "Add Product"}
            </Button>
          </form>
          {submitStatus === "success" && (
            <Alert className="mt-4 bg-green-100 border-green-600">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Product has been added successfully.
              </AlertDescription>
            </Alert>
          )}
          {submitStatus === "error" && (
            <Alert className="mt-4 bg-red-100 border-red-600">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                An error occurred while adding the product. Please try again.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </main>
      <footer className="bg-green-600 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 e-MANDI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

