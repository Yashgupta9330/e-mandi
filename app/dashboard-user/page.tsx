"use client"
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, MapPin, ThumbsUp } from 'lucide-react'
import { Navbar } from '@/components/normal/Navbar'

export default function UserDashboard() {
  const priceComparisonData = [
    { name: 'Tomatoes', avgPrice: 25, lowestPrice: 20 },
    { name: 'Potatoes', avgPrice: 20, lowestPrice: 15 },
    { name: 'Onions', avgPrice: 22, lowestPrice: 18 },
    { name: 'Carrots', avgPrice: 18, lowestPrice: 12 },
    { name: 'Cabbage', avgPrice: 15, lowestPrice: 10 },
    { name: 'Spinach', avgPrice: 12, lowestPrice: 8 },
    { name: 'Peppers', avgPrice: 30, lowestPrice: 25 },
    { name: 'Eggplant', avgPrice: 28, lowestPrice: 22 },
  ]

  return (
    <>
   <Navbar/>
    <div className="container mx-auto p-4 bg-white text-green-800">
      <h1 className="text-3xl font-bold mb-6 text-green-700">User Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Best Deals</CardTitle>
            <ThumbsUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">3</div>
            <p className="text-xs text-green-600">Vegetables on sale today</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Nearby Markets</CardTitle>
            <MapPin className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">5</div>
            <p className="text-xs text-green-600">Within 5km radius</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Avg. Savings</CardTitle>
            <ShoppingCart className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">15%</div>
            <p className="text-xs text-green-600">Compared to street prices</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Price Alerts</CardTitle>
            <Search className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">2</div>
            <p className="text-xs text-green-600">Price drops detected</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="market" className="space-y-4">
        <TabsList className="bg-green-100">
          <TabsTrigger value="market" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Market Overview</TabsTrigger>
          <TabsTrigger value="compare" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Price Comparison</TabsTrigger>
          <TabsTrigger value="order" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Place Order</TabsTrigger>
        </TabsList>
        
        <TabsContent value="market">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700">Today's Best Deals</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-green-100">
                    <TableHead className="text-green-700">Vegetable</TableHead>
                    <TableHead className="text-green-700">Price (₹/kg)</TableHead>
                    <TableHead className="text-green-700">Market</TableHead>
                    <TableHead className="text-green-700">Savings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Tomatoes</TableCell>
                    <TableCell>₹20</TableCell>
                    <TableCell>Central Market</TableCell>
                    <TableCell>20% off</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Potatoes</TableCell>
                    <TableCell>₹15</TableCell>
                    <TableCell>Green Grocers</TableCell>
                    <TableCell>25% off</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Onions</TableCell>
                    <TableCell>₹18</TableCell>
                    <TableCell>FreshVeg Mart</TableCell>
                    <TableCell>15% off</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="compare">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700">Price Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={priceComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="avgPrice" fill="#00C49F" name="Average Price" />
                  <Bar dataKey="lowestPrice" fill="#82ca9d" name="Lowest Price" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="order">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700">Place Order</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vegetable" className="text-green-700">Vegetable</Label>
                    <Input id="vegetable" placeholder="Enter vegetable name" className="border-green-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-green-700">Quantity (kg)</Label>
                    <Input id="quantity" type="number" placeholder="Enter quantity" className="border-green-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="market" className="text-green-700">Preferred Market</Label>
                  <Input id="market" placeholder="Enter market name" className="border-green-200" />
                </div>
                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Place Order</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </>
  )
}