"use client"
import React from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon, Users, ShoppingCart, TrendingUp, AlertTriangle } from 'lucide-react'
import { Navbar } from '@/components/normal/Navbar'

export default function AdminDashboard() {
    // Mock data for charts and tables
    const userDistributionData = [
      { name: 'Farmers', value: 250 },
      { name: 'Wholesalers', value: 50 },
      { name: 'Retailers', value: 500 },
      { name: 'Civilians', value: 10000 },
    ]
  
    const transactionVolumeData = [
      { name: 'Jan', value: 1200000 },
      { name: 'Feb', value: 1500000 },
      { name: 'Mar', value: 1300000 },
      { name: 'Apr', value: 1800000 },
      { name: 'May', value: 1600000 },
      { name: 'Jun', value: 2000000 },
    ]
  
    const vegetablePriceData = [
      { name: 'Tomatoes', price: 25 },
      { name: 'Potatoes', price: 20 },
      { name: 'Onions', price: 22 },
      { name: 'Carrots', price: 18 },
      { name: 'Cabbage', price: 15 },
      { name: 'Spinach', price: 12 },
      { name: 'Peppers', price: 30 },
      { name: 'Eggplant', price: 28 },
    ]
  
    const recentComplaints = [
      { id: 1, user: 'Farmer123', type: 'Price Discrepancy', status: 'Open' },
      { id: 2, user: 'Retailer456', type: 'Delivery Delay', status: 'In Progress' },
      { id: 3, user: 'Civilian789', type: 'Quality Issue', status: 'Resolved' },
      { id: 4, user: 'Wholesaler101', type: 'Payment Dispute', status: 'Open' },
      { id: 5, user: 'Farmer202', type: 'System Bug', status: 'In Progress' },
    ]
  
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
  
    return (
        <>
        <Navbar/>
      <div className="container mx-auto p-4 bg-white text-green-800">
        <h1 className="text-3xl font-bold mb-6 text-green-700">Admin Dashboard</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Total Users</CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-800">10,800</div>
              <p className="text-xs text-green-600">+2.5% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Transaction Volume</CardTitle>
              <BarChart3 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-800">₹2,000,000</div>
              <p className="text-xs text-green-600">+12.5% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Active Listings</CardTitle>
              <ShoppingCart className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-800">1,250</div>
              <p className="text-xs text-green-600">+5.2% from last week</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700">Complaints</CardTitle>
              <AlertTriangle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-800">15</div>
              <p className="text-xs text-green-600">-3 from last week</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-green-100">
            <TabsTrigger value="overview" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Overview</TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Users</TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Transactions</TabsTrigger>
            <TabsTrigger value="complaints" className="data-[state=active]:bg-green-200 data-[state=active]:text-green-800">Complaints</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">Transaction Volume Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={transactionVolumeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#00C49F" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="col-span-3 bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">User Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={userDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {userDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="users">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">User Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-green-100">
                      <TableHead className="text-green-700">User Type</TableHead>
                      <TableHead className="text-green-700">Total Users</TableHead>
                      <TableHead className="text-green-700">Active Users</TableHead>
                      <TableHead className="text-green-700">Growth Rate</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Farmers</TableCell>
                      <TableCell>250</TableCell>
                      <TableCell>220</TableCell>
                      <TableCell>+5%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Wholesalers</TableCell>
                      <TableCell>50</TableCell>
                      <TableCell>48</TableCell>
                      <TableCell>+2%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Retailers</TableCell>
                      <TableCell>500</TableCell>
                      <TableCell>450</TableCell>
                      <TableCell>+8%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Civilians</TableCell>
                      <TableCell>10,000</TableCell>
                      <TableCell>8,500</TableCell>
                      <TableCell>+15%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="transactions">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Vegetable Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={vegetablePriceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="complaints">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Recent Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-green-100">
                      <TableHead className="text-green-700">ID</TableHead>
                      <TableHead className="text-green-700">User</TableHead>
                      <TableHead className="text-green-700">Type</TableHead>
                      <TableHead className="text-green-700">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentComplaints.map((complaint) => (
                      <TableRow key={complaint.id}>
                        <TableCell>{complaint.id}</TableCell>
                        <TableCell>{complaint.user}</TableCell>
                        <TableCell>{complaint.type}</TableCell>
                        <TableCell>{complaint.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <footer className="bg-green-600 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 e-MANDI. All rights reserved.</p>
        </div>
      </footer>
      </>
    )
  }