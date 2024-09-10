"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulating an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">e-MANDI</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/product-listing" className="hover:underline">Products</Link></li>
              <li><Link href="/login" className="hover:underline">Login</Link></li>
              <li><Link href="/register" className="hover:underline">Register</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto mt-8 p-4 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Reset Password"}
            </Button>
          </form>
          {submitStatus === "success" && (
            <Alert className="mt-4 bg-green-100 border-green-600">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                If an account exists for {email}, you will receive password reset instructions.
              </AlertDescription>
            </Alert>
          )}
          {submitStatus === "error" && (
            <Alert className="mt-4 bg-red-100 border-red-600">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                An error occurred. Please try again later.
              </AlertDescription>
            </Alert>
          )}
          <div className="mt-4 text-center">
            <Link href="/login" className="text-sm text-green-600 hover:underline">
              Back to Login
            </Link>
          </div>
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