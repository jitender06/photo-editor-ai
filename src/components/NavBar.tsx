'use client'

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from 'lucide-react'
import Link from "next/link"
import * as React from "react"

const marketing = [
  { title: "Logo Maker", href: "#" },
  { title: "Flyer Maker", href: "#" },
  { title: "Poster Maker", href: "#" },
  { title: "Business Card Maker", href: "#" },
  { title: "Resume Maker", href: "#" },
  { title: "Card Maker", href: "#" },
]

const social = [
  { title: "YouTube Thumbnail Maker", href: "#" },
  { title: "YouTube Cover Maker", href: "#" },
  { title: "Instagram Post Maker", href: "#" },
  { title: "Facebook Cover Maker", href: "#" },
  { title: "Twitch Cover Maker", href: "#" },
  { title: "Twitter Cover Maker", href: "#" },
]

const events = [
  { title: "Valentine's Day", href: "#" },
  { title: "Thanksgiving", href: "#" },
  { title: "Christmas", href: "#" },
  { title: "Halloween", href: "#" },
]

const tools = [
  { title: "Basic Editor", href: "#" },
  { title: "Background Remover", href: "#" },
  { title: "Photo Enhancer", href: "#" },
  { title: "AI Portrait Generator", href: "#" },
]

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-transparent backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#ff6a3d] to-[#ffa48d]" />
          <span className="text-xl font-bold">Fotor</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Photo Editing Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {tools.map((tool) => (
                      <ListItem key={tool.title} title={tool.title} href={tool.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Create</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-6 md:w-[800px] lg:grid-cols-3">
                    <div>
                      <h4 className="mb-3 text-sm font-medium leading-none">Marketing</h4>
                      <ul className="grid gap-3">
                        {marketing.map((item) => (
                          <ListItem key={item.title} title={item.title} href={item.href} />
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm font-medium leading-none">Social Media</h4>
                      <ul className="grid gap-3">
                        {social.map((item) => (
                          <ListItem key={item.title} title={item.title} href={item.href} />
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm font-medium leading-none">Events</h4>
                      <ul className="grid gap-3">
                        {events.map((item) => (
                          <ListItem key={item.title} title={item.title} href={item.href} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>AI Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px]">
                    <ListItem
                      title="AI Image Generator"
                      href="#"
                    />
                    <ListItem
                      title="AI Background Generator"
                      href="#"
                    />
                    <ListItem
                      title="AI Portrait Generator"
                      href="#"
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <ListItem title="Social Media Templates" href="#" />
                    <ListItem title="Marketing Templates" href="#" />
                    <ListItem title="Event Templates" href="#" />
                    <ListItem title="Business Templates" href="#" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Support
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Community
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button variant="ghost" className="text-base">
              Log in
            </Button>
            <Button className="bg-[#ff6a3d] text-white hover:bg-[#ff6a3d]/90">
              Sign up
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full">
                <div className="grid gap-2 py-6">
                  <Link
                    href="#"
                    className="flex w-full items-center py-2 text-sm font-medium"
                  >
                    Photo Editing Tools
                  </Link>
                  <Link
                    href="#"
                    className="flex w-full items-center py-2 text-sm font-medium"
                  >
                    Create
                  </Link>
                  <Link
                    href="#"
                    className="flex w-full items-center py-2 text-sm font-medium"
                  >
                    AI Tools
                  </Link>
                  <Link
                    href="#"
                    className="flex w-full items-center py-2 text-sm font-medium"
                  >
                    Templates
                  </Link>
                  <Link
                    href="#"
                    className="flex w-full items-center py-2 text-sm font-medium"
                  >
                    Support
                  </Link>
                  <Link
                    href="#"
                    className="flex w-full items-center py-2 text-sm font-medium"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#"
                    className="flex w-full items-center py-2 text-sm font-medium"
                  >
                    Community
                  </Link>
                  <div className="mt-4 space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      Log in
                    </Button>
                    <Button className="w-full bg-[#4285f4] text-white hover:bg-[#4285f4]/90">
                      Sign up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

