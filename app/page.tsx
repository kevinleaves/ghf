import {
  NavigationMenu,
  NavigationMenuList,
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
import Footer from '@/components/modules/landing/Footer';
import ContactForm from '@/components/modules/landing/ContactForm';
import NavigationMenuItems from '@/components/modules/landing/NavigationMenuItems';

export default function Home() {
  return (
    <div className="bg-background flex flex-col p-1 lg:py-4 lg:pb-20">
      <header className="p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-between w-full">
          <Image src="/logo.svg" alt="Logo" width={150} height={50} />

          {/* desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <NavigationMenu className="lg:flex lg:items-center">
              <NavigationMenuList>
                <NavigationMenuItems />
              </NavigationMenuList>
            </NavigationMenu>

            <Button variant={'outline'} size={'icon'}>
              <MagnifyingGlassIcon className="h-5 w-5" />
            </Button>
          </div>

          {/* mobile menu*/}
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
                    <NavigationMenuItems />
                  </NavigationMenuList>
                </NavigationMenu>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/**main section */}
      <main className="w-full min-h-[80vh] bg-cover bg-[position:75%_65%] bg-no-repeat flex items-center justify-start px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32 bg-[url('/hero.jpg')] scale-x-[-1]">
        <div className="max-w-6xl mx-auto w-full scale-x-[-1]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex flex-col max-w-xl gap-8 items-center lg:items-start">
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

            <div className="w-full lg:w-[450px] lg:ml-auto bg-cta p-6 md:p-8 rounded-lg mt-12 lg:mt-0">
              <h2 className="text-3xl md:text-3xl mb-4 text-center">
                Contact Us and Let&apos;s Make Some BREAD together!
              </h2>
              <p className="text-sm mb-6 text-center">
                <span className="">*</span> Required Information
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
