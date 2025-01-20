"use client"

import { useState } from "react"
import Link from "next/link"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const tools = [
  { title: "Remove Background", href: "#" },
  { title: "Resize Image", href: "#" },
  { title: "Edit Image", href: "#" },
  { title: "Enhance Image", href: "#" },
]

const marketing = [
  { title: "Create a Flyer", href: "#" },
  { title: "Create a Poster", href: "#" },
  { title: "Create a Brochure", href: "#" },
  { title: "Create a Social Media Post", href: "#" },
]

const social = [
  { title: "Create an Instagram Post", href: "#" },
  { title: "Create a Facebook Post", href: "#" },
  { title: "Create a Twitter Post", href: "#" },
  { title: "Create a LinkedIn Post", href: "#" },
]

const events = [
  { title: "Create an Event Flyer", href: "#" },
  { title: "Create an Event Poster", href: "#" },
  { title: "Create an Event Ticket", href: "#" },
  { title: "Create an Event Invitation", href: "#" },
]

const ListItem = ({ title, href }: { title: string; href: string }) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
      </a>
    </NavigationMenuLink>
  </li>
)

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#ff9b8d] to-[#ffa48d] px-4 lg:px-6">
      <div className="container mx-auto">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#ff6a3d] to-[#ffa48d]" />
            <span className="text-xl font-bold text-white">Fotor</span>
          </div>

          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <MobileMenu />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <DesktopMenu />
          )}
        </nav>
      </div>
    </header>
  )
}

function MobileMenu() {
  return (
    <div className="space-y-4">
      <MobileMenuItem title="Photo Editing Tools" items={tools} />
      <MobileMenuItem title="Create" items={[...marketing, ...social, ...events]} />
      <MobileMenuItem
        title="AI Tools"
        items={[
          { title: "AI Image Generator", href: "#" },
          { title: "AI Background Generator", href: "#" },
          { title: "AI Portrait Generator", href: "#" },
        ]}
      />
      <MobileMenuItem
        title="Templates"
        items={[
          { title: "Social Media Templates", href: "#" },
          { title: "Marketing Templates", href: "#" },
          { title: "Event Templates", href: "#" },
          { title: "Business Templates", href: "#" },
        ]}
      />
      <Link href="#" className="block py-2 text-sm hover:text-[#ff6a3d]">
        Support
      </Link>
      <Link href="#" className="block py-2 text-sm hover:text-[#ff6a3d]">
        Pricing
      </Link>
      <Link href="#" className="block py-2 text-sm hover:text-[#ff6a3d]">
        Community
      </Link>
      <div className="space-y-2 pt-4">
        <Button variant="outline" className="w-full justify-start">
          Log in
        </Button>
        <Button className="w-full bg-[#ff6a3d] text-white hover:bg-[#ff6a3d]/90">Sign up</Button>
      </div>
    </div>
  )
}

function MobileMenuItem({ title, items }: { title: string; items: { title: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-sm font-medium"
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")} />
      </button>
      {isOpen && (
        <ul className="ml-4 mt-2 space-y-2">
          {items.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="block py-1 text-sm hover:text-[#ff6a3d]">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function DesktopMenu() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white">Photo Editing Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {tools.map((tool) => (
                  <ListItem key={tool.title} title={tool.title} href={tool.href} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white">Create</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-6 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <div className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">Create Amazing Designs</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Unleash your creativity with our powerful design tools.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
                <div className="grid gap-4">
                  <h4 className="text-sm font-medium leading-none">Marketing</h4>
                  <ul className="grid gap-2">
                    {marketing.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} />
                    ))}
                  </ul>
                </div>
                <div className="grid gap-4">
                  <h4 className="text-sm font-medium leading-none">Social Media</h4>
                  <ul className="grid gap-2">
                    {social.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} />
                    ))}
                  </ul>
                </div>
                <div className="grid gap-4">
                  <h4 className="text-sm font-medium leading-none">Events</h4>
                  <ul className="grid gap-2">
                    {events.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} />
                    ))}
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white">AI Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem title="AI Image Generator" href="#" />
                <ListItem title="AI Background Generator" href="#" />
                <ListItem title="AI Portrait Generator" href="#" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white">Templates</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="Social Media Templates" href="#" />
                <ListItem title="Marketing Templates" href="#" />
                <ListItem title="Event Templates" href="#" />
                <ListItem title="Business Templates" href="#" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className="text-white">Support</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className="text-white">Pricing</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className="text-white">Community</NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-white">
          Log in
        </Button>
        <Button className="bg-white text-[#ff6a3d] hover:bg-white/90">Sign up</Button>
      </div>
    </>
  )
}

