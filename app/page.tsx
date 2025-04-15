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
import { HamburgerMenuIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col p-1 lg:p-4 lg:pb-20 lg:gap-16">
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
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
