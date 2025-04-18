import {
  FigmaLogoIcon,
  LinkedInLogoIcon,
  MobileIcon,
  SewingPinFilledIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

interface Props {}

export default function Footer({}: Props) {
  return (
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
  );
}
