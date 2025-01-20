import { Button } from "@/components/ui/button"
import { ImagePlus } from 'lucide-react'
import { HeroCard } from "./HeroCard"

export function Hero() {
  return (
    <div className="py-1 lg:py-16 relative bg-gradient-to-br from-[#ffa48d]  to-[#ff9b8d]" style={{height:"calc(100vh - 4rem)"}}>
      <div className="container max-w-4xl mx-auto flex items-center justify-between text-center mt-7">
        <div className="">
          <h1 className="mb-6 text-4xl px-1 font-bold tracking-tight lg:text-6xl">
            Online photo editor for{" "}
            <span className="text-[#ff6a3d]">everyone</span>
          </h1>

          <p className="px-2 lg:px0 mb-8 text-sm lg:text-xl text-muted-foreground">
            Effortlessly enhance and edit your photos with powerful tools designed for simplicity. Perfect your images in just a few clicks, no experience needed!
          </p>

          <Button size="lg" className="bg-[#ff6a3d] text-white text-base hover:bg-[#ff6a3d]/90 transition-all duration-300 transform hover:scale-105">
            <ImagePlus /> Edit photo for free
          </Button>
        </div>
      </div>
      <HeroCard />
    </div>
  )
}
