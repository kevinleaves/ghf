import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
  TwitterLogoIcon,
  FigmaLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
  SewingPinFilledIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="bg-background flex flex-col p-1 lg:p-4 lg:pb-20 lg:gap-16">
      <header className="p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-between w-full">
          {/**logo */}
          <Image src="/logo.svg" alt="Logo" width={150} height={50} />

          {/* desktop navigation - hidden on mobile */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <NavigationMenu className="lg:flex lg:items-center">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem asChild>
                  <NavigationMenuLink href={'/research'}>
                    Research
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant={'cta'}>Ready to Franchise</Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* desktop search button */}
            <Button variant={'outline'} size={'icon'}>
              <MagnifyingGlassIcon className="h-5 w-5" />
            </Button>
          </div>

          {/* mobile menu - hidden on desktop */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button variant={'outline'} size={'icon'}>
              <MagnifyingGlassIcon className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <HamburgerMenuIcon className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <NavigationMenu orientation="vertical">
                  <NavigationMenuList className="flex flex-col">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuLink href={'/research'}>
                        Research
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Button variant={'cta'}>Ready to Franchise</Button>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="w-full min-h-[80vh] bg-cover bg-[position:75%_65%] bg-no-repeat flex items-center justify-start px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32 bg-[url('/hero.jpg')] scale-x-[-1]">
        <div className="max-w-6xl mx-auto w-full scale-x-[-1]">
          <div className="flex flex-col max-w-xl gap-8 items-center">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.7)]">
              <h1 className="mb-2">Invest.</h1>
              <h1 className="mb-2 drop-shadow-2xl">Build.</h1>
              <h1 className="mb-2">Prosper.</h1>
            </div>
            <div className="bg-cta-foreground/50 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm lg:border lg:border-black">
              <h4 className="text-lg md:text-xl font-medium">
                With our expert support, training, and great products, our
                franchise partners reap BOUNTIFUL harvests.
              </h4>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 w-full bg-footer text-footer-foreground py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="flex flex-col w-full gap-8 items-center lg:items-start order-2 lg:order-1 lg:w-1/2">
            <div className="flex gap-3 items-center">
              <SewingPinFilledIcon className="w-6 h-6 flex-shrink-0" />
              <span>28 S Montana Street Dillon, MT 59725</span>
            </div>
            <div className="flex gap-3 items-center">
              <MobileIcon className="w-6 h-6 flex-shrink-0" />
              <span>1.800.442.0424 406.683.6842</span>
            </div>
            <div className="flex gap-8">
              <a href="#" aria-label="Twitter">
                <TwitterLogoIcon className="w-6 h-6 hover:text-primary transition-colors" />
              </a>
              <a href="#" aria-label="Figma">
                <FigmaLogoIcon className="w-6 h-6 hover:text-primary transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedInLogoIcon className="w-6 h-6 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end pb-8 gap-6 order-1 lg:order-2 lg:w-1/2">
            <h3 className="font-bold text-lg">Great Harvest</h3>
            <nav aria-label="Footer Navigation">
              <ul className="flex flex-col gap-4 text-center ">
                <li>
                  <Link href="/location">Locations</Link>
                </li>
                <li>
                  <Link href="/catering">Order Catering</Link>
                </li>
                <li>
                  <Link href="/franchise">Franchise</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
