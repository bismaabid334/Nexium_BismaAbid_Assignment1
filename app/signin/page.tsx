"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Handle sign in logic here
    console.log("Sign in with:", email, password);
    
    // After successful sign in, redirect to home page
    router.push("/");
    
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-center flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to Quote Gen! <span className="ml-2">🔐</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Sign up to continue generating amazing quotes
        </p>

        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-lg border-0">
          <CardContent className="p-8">
            <form onSubmit={handleSignIn} className="space-y-6">
              <div className="space-y-2 text-left">
                <Label htmlFor="email" className="text-gray-700 font-medium text-sm">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="space-y-2 text-left">
                <Label htmlFor="password" className="text-gray-700 font-medium text-sm">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="text-center">
                <span className="text-gray-400 text-sm">or</span>
              </div>
              
              <div className="text-center space-y-2">
                <Link 
                  href="/forgot-password"
                  className="block text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline transition-colors duration-200"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Ready to get inspired? Let's generate some quotes! ✨
          </p>
        </div>
      </main>

      <footer className="w-full text-center py-4 bg-violet-200 text-gray-800 text-sm">
        © 2025 Quote Gen. Built using ShadCN UI & Next.js.
      </footer>
    </>
  );
}