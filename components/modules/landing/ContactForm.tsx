import { Button } from '@/components/ui/button';
interface Props {}

export default function ContactForm({}: Props) {
  return (
    <form className="flex flex-col space-y-4">
      <span className="text-xl">Personal Information</span>
      <div>
        <label htmlFor="firstName" className="hidden text-sm font-medium">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-black bg-cta-foreground"
          placeholder="*First Name"
        />
      </div>

      <div>
        <label htmlFor="lastName" className="hidden text-sm font-medium">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-black bg-cta-foreground"
          placeholder="*Last Name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="hidden text-sm font-medium">
          Mobile Number
        </label>
        <input
          id="phone"
          type="tel"
          required
          placeholder="*Mobile Number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-black bg-cta-foreground"
        />
      </div>
      <div>
        <label htmlFor="email" className="hidden text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-black bg-cta-foreground"
          placeholder="*Email"
        />
      </div>

      <div>
        <label htmlFor="zipcode" className="text-sm font-medium hidden">
          Zip Code
        </label>
        <input
          id="zipcode"
          type="text"
          required
          pattern="[0-9]{5}(-[0-9]{4})?"
          placeholder="*Zipcode"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-black bg-cta-foreground"
        />
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
        <span className="text-xl ">Additional Information</span>
        <div>
          <label htmlFor="assets" className="text-sm font-medium hidden">
            Liquid Assets
          </label>
          <input
            id="assets"
            type="number"
            required
            placeholder="*Liquid Assets"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-black bg-cta-foreground"
          />
        </div>
        <div>
          <label htmlFor="netWorth" className="text-sm font-medium hidden">
            Net Worth
          </label>
          <input
            id="netWorth"
            type="number"
            required
            placeholder="*Net Worth"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-black bg-cta-foreground"
          />
        </div>
        <div>
          <label
            htmlFor="typeOfOwnership"
            className="text-sm font-medium hidden"
          >
            Type of Ownership
          </label>

          <select
            id="typeOfOwnership"
            required
            defaultValue={'*Type of Ownership'}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-black bg-cta-foreground"
          >
            <option value="*Type of Ownership" disabled>
              *Type of Ownership
            </option>
            <option value="option 1">1</option>
            <option value="option 2">2</option>
            <option value="option 2">3</option>
          </select>
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            id="message"
            placeholder="*Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-black bg-cta-foreground"
          ></textarea>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="rounded-4xl bg-cta-foreground text-black w-1/2 self-center font-bold h-12"
      >
        Submit
      </Button>
    </form>
  );
}
