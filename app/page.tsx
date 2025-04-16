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

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-footer text-footer-foreground py-12">
        <div className="flex flex-col w-1/2 gap-8">
          <div className="flex flex-col items-center py-8 gap-8">
            <h3 className="font-bold">Great Harvest</h3>
            <nav className="">
              <ul className="flex flex-col gap-4 text-center">
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
          <div className="flex flex-col w-full gap-8">
            <div className="flex gap-2 items-center">
              <SewingPinFilledIcon className="w-8 h-8 flex-shrink-0" />
              <span>28 S Montana Street Dillon, MT 59725</span>
            </div>
            <div className="flex gap-2 text-wrap items-center justify-center">
              <MobileIcon className="w-8 h-8 flex-shrink-0" />
              <span>1.800.442.0424 406.683.6842 </span>
            </div>
            <div className="flex justify-between px-4">
              <TwitterLogoIcon className="w-8 h-8" />
              <FigmaLogoIcon className="w-8 h-8" />
              <LinkedInLogoIcon className="w-8 h-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
