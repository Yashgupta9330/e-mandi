"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Navbar } from "@/components/normal/Navbar"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

export default function Page() {
  const [userRole, setUserRole] = useState("Select user role")

  const roles = [
    "Farmer",
    "Wholesaler",
    "Retailer",
    "Buyer"
  ]

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdFGj0qAAAAACAz3ZuO577piaZo9dRrjftjDTra">
    <div className="min-h-screen bg-green-50 flex flex-col">
      <Navbar/>
      <main className="flex-grow container mx-auto mt-8 p-4 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Register</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <Input type="text" id="name" name="name" required className="mt-1 block w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" id="email" name="email" required className="mt-1 block w-full" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Input type="password" id="password" name="password" required className="mt-1 block w-full" />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <Input type="password" id="confirm-password" name="confirm-password" required className="mt-1 block w-full" />
            </div>
            <div>
              <label htmlFor="user-role" className="block text-sm font-medium text-gray-700">User Role</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {userRole}
                    <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
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
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Register</Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <Link href="/login" className="font-medium text-green-600 hover:text-green-500">Login here</Link>
          </p>
        </div>
      </main>
      <footer className="bg-green-600 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 e-MANDI. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </GoogleReCaptchaProvider>
  )
}