import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LandingPage = () => {
  return (
    <div className=" flex flex-col items-center">
      <h2 className=" my-10 sm:my-16 text-3xl sm:text-6xl  lg:text-7xl text-white text-center  font-extrabold">
        Smart and Simple URL Shortening!
      </h2>
      <form className=" sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <Input
          type="url"
          placeholder="Enter your url"
          className="h-full flex-1 py-4 px-4"
        />
        <Button className="h-full font-bold" type="submit" variant="green">
          Shorten
        </Button>
      </form>
      <div className=" w-full my-11 md:px-11 overflow-hidden relative">
        <img
          src="/1800.png"
          alt=""
          className=" w-full rounded-lg border-white border-2"
        />
        <h2 className=" absolute text-xl sm:text-2xl md:text-5xl text-center  font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow-md">
          Simplify your links for easy sharing and tracking.
        </h2>
      </div>
      <Accordion type="multiple" collapsible className="w-full my-11 md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>How it works</AccordionTrigger>
          <AccordionContent>
            <p>
              A URL shortener works by taking a long URL and generating a
              shorter, unique URL that redirects to the original address. When
              users click on the shortened link, they are redirected to the
              intended destination. This is useful for sharing lengthy URLs in a
              concise format, tracking link clicks, and improving the aesthetic
              of shared links.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Benefits of using a URL shortener</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                Easy to share: Shorter links are easier to share, especially on
                platforms with character limits.
              </li>
              <li>
                Trackable: Many URL shorteners offer analytics to track the
                number of clicks and other metrics.
              </li>
              <li>
                Customizable: Some services allow you to customize the shortened
                URL for branding purposes.
              </li>
              <li>
                Improves aesthetics: Shortened URLs look cleaner and are more
                visually appealing.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it secure?</AccordionTrigger>
          <AccordionContent>
            <p>
              Yes, URL shorteners are generally secure, but it's important to
              use reputable services. They often include features like spam and
              phishing protection. However, users should always be cautious and
              ensure they trust the source of the shortened link.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
