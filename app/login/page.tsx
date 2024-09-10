"use client"
import { useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Select your role");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const roles = [
    "Farmer",
    "Wholesaler",
    "Retailer",
    "Civilian",
    "Computer Professional",
    "Other",
  ];

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.log("Recaptcha has not loaded yet.");
      return;
    }

    const token = await executeRecaptcha("login");
    setCaptchaToken(token);

    // Now you have the captchaToken, you can send it to your server for verification
    console.log("Login attempt:", { email, password, role, captchaToken });
    // Handle login logic here, including sending `captchaToken` to your backend
  };

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdFGj0qAAAAACAz3ZuO577piaZo9dRrjftjDTra">
      <div className="min-h-screen bg-green-50 flex flex-col">
        <header className="bg-green-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">e-MANDI</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li><Link href="/products" className="hover:underline">Products</Link></li>
                <li><Link href="/product-listing" className="hover:underline">Add Products</Link></li>
                <li>
                  <Link href="/login" className="hover:underline">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:underline">
                    Register
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto mt-8 p-4 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Login</h2>
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
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      {role}
                      <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {roles.map((r) => (
                      <DropdownMenuItem key={r} onSelect={() => setRole(r)}>
                        {r}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Login
              </Button>
            </form>
            <div className="mt-4 text-center">
              <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/register" className="font-medium text-green-600 hover:underline">
                Register here
              </Link>
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
  );
}
