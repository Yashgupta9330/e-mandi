"use client"
import React from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { BarChart3, LineChart as LineChartIcon, ShoppingCart, TrendingUp } from 'lucide-react'
import { Navbar } from '@/components/normal/Navbar'

export default function WholesalerDashboard() {
  const salesData = [
    { name: 'Tomatoes', sales: 500 },
    { name: 'Potatoes', sales: 800 },
    { name: 'Onions', sales: 600 },
    { name: 'Carrots', sales: 400 },
    { name: 'Cabbage', sales: 300 },
    { name: 'Spinach', sales: 200 },
    { name: 'Peppers', sales: 350 },
    { name: 'Eggplant', sales: 250 },
  ]

  const profitData = [
    { name: 'Jan', profit: 50000 },
    { name: 'Feb', profit: 65000 },
    { name: 'Mar', profit: 55000 },
    { name: 'Apr', profit: 70000 },
    { name: 'May', profit: 60000 },
    { name: 'Jun', profit: 75000 },
  ]

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4 bg-white text-green-800">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Wholesaler Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Total Sales</CardTitle>
            <BarChart3 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">₹3,750,000</div>
            <p className="text-xs text-green-600">+15.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Profit Margin</CardTitle>
            <LineChartIcon className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">18.5%</div>
            <p className="text-xs text-green-600">+2.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Active Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">42</div>
            <p className="text-xs text-green-600">8 new orders today</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Market Trends</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">3</div>
            <p className="text-xs text-green-600">Vegetables with rising demand</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-green-100">
          <TabsTrigger value="overview" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Overview</TabsTrigger>
          <TabsTrigger value="inventory" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Inventory</TabsTrigger>
          <TabsTrigger value="orders" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Orders</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Profit Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={profitData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="profit" stroke="#00C49F" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Sales by Vegetable</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="inventory">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700">Current Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-green-100">
                    <TableHead className="text-green-700">Vegetable</TableHead>
                    <TableHead className="text-green-700">Quantity (tons)</TableHead>
                    <TableHead className="text-green-700">Price (₹/kg)</TableHead>
                    <TableHead className="text-green-700">Total Value (₹)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesData.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.sales / 10}</TableCell>
                      <TableCell>{Math.floor(Math.random() * 20) + 10}</TableCell>
                      <TableCell>{item.sales * (Math.floor(Math.random() * 20) + 10) * 100}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="orders">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700">Manage Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="retailer" className="text-green-700">Retailer</Label>
                    <Input id="retailer" placeholder="Enter retailer name" className="border-green-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vegetable" className="text-green-700">Vegetable</Label>
                    <Input id="vegetable" placeholder="Enter vegetable name" className="border-green-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity" className="text-green-700">Quantity (tons)</Label>
                    <Input id="quantity" type="number" placeholder="Enter quantity" className="border-green-200" />
                  </div>
                </div>
                <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Create Order</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    <footer className="bg-green-600 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 e-MANDI. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}