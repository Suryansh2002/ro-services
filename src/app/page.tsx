'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, ShoppingCart, Droplet, Recycle, ThumbsUp, Search, Menu, Phone } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function RoPartsLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-gradient-to-l from-blue-50 to-gray-100">
        <Link className="flex items-center justify-center" href="#">
          <Droplet className="h-6 w-6 text-blue-900" />
          <span className="ml-2 text-lg font-bold text-blue-900 hidden md:flex">RO Parts Co.</span>
        </Link>
        <form className="flex items-center space-x-2">
          <Input
            type="search"
            placeholder="Search RO parts..."
            className="w-[300px] lg:w-[500px] h-10 bg-gray-50 placeholder:px-2"
          />
          <Button type="submit" size="icon" variant="ghost">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
        <div className="flex justify-center items-center">
          <Link className="hidden md:inline-flex" href="#">
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate our RO parts store
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link className="text-sm font-medium hover:underline" href="#">
                  Products
                </Link>
                <Link className="text-sm font-medium hover:underline" href="#">
                  About
                </Link>
                <Link className="text-sm font-medium hover:underline" href="#">
                  Contact
                </Link>
                <Link className="text-sm font-medium hover:underline" href="#">
                  Cart
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 bg-[url('/water.webp')]" >
          <div className="container mx-auto bg-white bg-opacity-60 p-10 rounded-lg backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-950">
                  Premium RO Parts for Crystal Clear Water
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Upgrade your water purifier with our high-quality parts. Enjoy pure, clean water every day.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Shop Now</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-blue-950">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "RO Membrane", description: "High-efficiency 100 GPD membrane", price: "$49.99" },
                { title: "Carbon Filter", description: "Activated carbon for superior filtration", price: "$24.99" },
                { title: "Inline Filter", description: "Quick-connect 2\" x 10\" filter", price: "$19.99" },
              ].map((product, index) => (
                <Card key={index} className="hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Filter className="h-24 w-24 mx-auto text-gray-500" />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-xl font-bold">{product.price}</span>
                    <Button className="bg-blue-700">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
              Why Choose Our RO Parts?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Filter, title: "Superior Filtration", description: "Our parts ensure the highest level of water purification" },
                { icon: Recycle, title: "Long-lasting", description: "Durable materials for extended use and less frequent replacements" },
                { icon: ThumbsUp, title: "Easy Installation", description: "User-friendly designs for hassle-free replacement" },
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <benefit.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-gray-900 text-primary-foreground">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Phone className="h-16 w-16 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl">
                Need Expert Assistance?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 text-sm md:text-base">
                Our team of RO specialists is ready to help you with any questions or concerns.
              </p>
              <Button size="lg" variant="secondary" className="mt-4">
                Call for Service
              </Button>
              <p className="text-sm text-primary-foreground/60">
                Available All Days, 9AM - 6PM
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 RO Parts Co. All rights reserved.
        </p>
        {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav> */}
      </footer>
    </div>
  )
}